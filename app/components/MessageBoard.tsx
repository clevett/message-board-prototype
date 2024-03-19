import React from "react";

import { useRecoilValue } from "recoil";
import { selectedChannelAtom, userAtom } from "../recoil/atoms";

import { Editor } from "./Editor";
import { MessagePanel } from "./MessagePanel";
import { NavigationContainer } from "../containers/NavigationContainer";
import logo from "../logo.svg";
import styles from "./MessageBoard.module.scss";

// ● State
// ○ Channel list
//  ■ Channel list is loaded once on loading the application
// ○ Selected channel and messages
//  ■ There is no upfront loading of messages
//  ■ Messages already in local state are showed immediately
//  ■ Messages are loaded from remote on channel selection and updated to screen
//  ■ Messages are also stored to local state after loading the from remote

export const MessageBoard = () => {
  const selected = useRecoilValue(selectedChannelAtom);
  const user = useRecoilValue(userAtom);

  return (
    <div className="h-full">
      <div className={styles.layout}>
        <header className={styles.header}>
          <img src={logo} className="App-logo" alt="AlphaSense" />
          <span>{user?.displayName}</span>
        </header>
        <div className={styles.content}>
          <NavigationContainer />
          <div className={styles.channel}>
            <MessagePanel />
            {selected && <Editor />}
          </div>
        </div>
      </div>
    </div>
  );
};
