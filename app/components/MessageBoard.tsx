import { Editor } from "./Editor";
import { MessagePanel } from "./MessagePanel";
import { Navigation } from "./Navigation";
import { selectedChannelIdAtom, userAtom } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import logo from "../logo.svg";
import React from "react";
import styles from "./MessageBoard.module.scss";

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
