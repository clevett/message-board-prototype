import React from "react";

import { useRecoilValue } from "recoil";
import { selectedChannelAtom } from "../recoil/atoms";

import logo from "../logo.svg";
import styles from "./MessageBoard.module.scss";
import { MessagePanel } from "./MessagePanel";
import { Navigation } from "./Navigation";
import { Editor } from "./Editor";

export const MessageBoard = () => {
  const selected = useRecoilValue(selectedChannelAtom);

  return (
    <div className="h-full">
      <div className={styles.layout}>
        <header className={styles.header}>
          <img src={logo} className="App-logo" alt="AlphaSense" />
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

// ● Interactions
// ○ Clicking a channel in navigation panel selects that channel
// ○ Entering text in editor and clicking submit adds message to the selected channel
// ○ Submitting editor clears input
// ○ Switching channels clears input
