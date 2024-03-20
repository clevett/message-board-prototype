import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { selectedChannelSelector } from "../recoil/selectors";
import { userAtom } from "../recoil/atoms";

import { v4 as uuidv4 } from "uuid";

import styles from "./Editor.module.scss";

import { postMessage } from "../helpers/post-message";
import { Channel } from "../recoil/refine";

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

    const newMessage = {
      author: user?.displayName ?? "Anonymous",
      body: message,
      channelId: selected.id,
      id: uuidv4(),
      timestamp: new Date(),
    };

    const submission: Channel = {
      ...selected,
      messages: [...(selected.messages ?? []), newMessage],
    };

    postMessage(selected.id, newMessage);
    setSelected(submission);
    setMessage("");
  };

  return (
    <div className={styles.editor}>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a new message"
        value={message}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />
      <button
        className={styles.btn}
        disabled={!message}
        onClick={handleSubmit}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
