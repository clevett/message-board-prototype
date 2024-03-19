import React from "react";

import { useRecoilValue } from "recoil";
import { selectedChannelSelector } from "../recoil/selectors";

import styles from "./MessagePanel.module.scss";

export const MessagePanel = () => {
  const selected = useRecoilValue(selectedChannelSelector);

  return (
    <div className={styles.messages}>
      {selected && (
        <div className="grid gap-2">
          <h2 className="font-bold leading-5 text-xl">{selected.name}</h2>
          <ul>
            {selected.replies.map((reply) => (
              <li key={`reply-${reply.id}`}>
                <div className="flex justify-between flex-col">
                  <p className="text-gray-400">
                    {reply.author} ({reply.timestamp.toLocaleString()})
                  </p>
                  <p className={styles.reply}>{reply.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
