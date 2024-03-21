import { messagesLoading } from "../recoil/atoms";
import { selectedChannelSelector } from "../recoil/selectors";
import { useRecoilValue } from "recoil";
import React from "react";
import styles from "./MessagePanel.module.scss";

export const MessagePanel = () => {
  const selected = useRecoilValue(selectedChannelSelector);
  const isLoading = useRecoilValue(messagesLoading);

  return (
    <div className={styles.messages}>
      {selected && !isLoading && (
        <div className="grid gap-2">
          <h2 className="font-bold leading-5 text-xl">{selected.name}</h2>
          <ul>
            {selected.messages?.map((reply) => (
              <li key={`reply-${reply.id}`}>
                <div className="flex justify-between flex-col">
                  <p>
                    <span className={styles.author}>{reply.author} </span>
                  </p>
                  <p className={styles.reply}>{reply.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoading && <div className={styles.center}>Loading...</div>}
      {!selected && !isLoading && (
        <div className={styles.center}>Select a channel to view messages</div>
      )}
    </div>
  );
};
