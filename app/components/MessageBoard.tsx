import React from "react";

import { useRecoilValue } from "recoil";
import { selectedChannelIdAtom, userAtom } from "../recoil/atoms";

import { Editor } from "./Editor";
import { MessagePanel } from "./MessagePanel";
import { Navigation } from "./Navigation";
import logo from "../logo.svg";
import styles from "./MessageBoard.module.scss";

//  Messages
// ○ Upon submitting a message to a channel that message is available for other users

// NodeJS Backend
// ● Channel and message storage can be an in-memory database (global variable etc)
// ● On server start, storage is populated with a fixed set of empty channels
// ● GET endpoint for querying channels
// ○ GET http://<backend>/channels
// ● GET endpoint for querying channel’s messages
// ○ GET http://<backend>/messages/<channel>
// ● POST endpoint for submitting new messages to a channel
// ○ POST http://<backend>/<channel>

export const MessageBoard = () => {
  const selected = useRecoilValue(selectedChannelIdAtom);
  const user = useRecoilValue(userAtom);

  return (
    <div className="h-full">
      <div className={styles.layout}>
        <header className={styles.header}>
          <img src={logo} className="App-logo" alt="AlphaSense" />
          <span>{user?.displayName}</span>
        </header>
        <div className={styles.content}>
          <Navigation />
          <div className={styles.channel}>
            <MessagePanel />
            {selected && <Editor />}
          </div>
        </div>
      </div>
    </div>
  );
};
