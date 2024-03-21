import { Channel } from "../recoil/refine";
import { postMessage } from "../helpers/post-message";
import { selectedChannelSelector } from "../recoil/selectors";
import { userAtom } from "../recoil/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import styles from "./Editor.module.scss";
export const Editor = () => {
  const user = useRecoilValue(userAtom);
  const [selected, setSelected] = useRecoilState(selectedChannelSelector);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    if (message === "") return;
    setMessage("");
  }, [selected?.id]);

  const handleSubmit = () => {
    if (selected === undefined || message === "") return;

    const newMessage = {
      author: user?.displayName ?? "Anonymous",
      body: message,
      channelId: selected.id,
      id: uuidv4(),
      timestamp: new Date(), //Consider using a server timestamp to ensure consistency
    };

    //Simple solution for prototype
    //In a real application, setup an Atom Family for messages
    //This would reduce rerenders for other components and provide better type safety
    const submission: Channel = {
      ...selected,
      messages: [...(selected.messages ?? []), newMessage],
    };

    postMessage(selected.id, newMessage).then((response) => {
      if (!response) {
        console.error("Failed to post message");
        return;
      }

      //This will update the local state with the new message
      //Alternatively updating local state could be handled by RecoilSync
      //That would allow for the local state to be updated by the server
      setSelected(submission);
      setMessage("");
    });
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
