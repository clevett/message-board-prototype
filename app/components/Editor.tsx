import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { selectedChannelSelector } from "../recoil/selectors";

import { v4 as uuidv4 } from "uuid";

import styles from "./Editor.module.scss";
import { userAtom } from "../recoil/atoms";

export const Editor = () => {
  const user = useRecoilValue(userAtom);
  const [selected, setSelected] = useRecoilState(selectedChannelSelector);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (message === "") return;
    setMessage("");
  }, [selected?.id]);

  const handleSubmit = () => {
    if (selected === undefined) return;

    const submission = {
      ...selected,
      replies: [
        ...selected.replies,
        {
          id: uuidv4(),
          body: message,
          timestamp: new Date(),
          author: user?.displayName ?? "Anonymous",
        },
      ],
    };

    setSelected(submission);
    setMessage("");
  };

  return (
    <div className={styles.editor}>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a new message"
        value={message}
      />
      <button className={styles.btn} disabled={!message} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
