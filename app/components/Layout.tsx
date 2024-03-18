import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { channelsAtom, selectedChannelAtom } from "../recoil/atoms";

import { v4 as uuidv4 } from "uuid";

import logo from "../logo.svg";
import styles from "./Layout.module.scss";

export const Layout = () => {
  const [selected, setSelected] = useRecoilState(selectedChannelAtom);
  const channels = useRecoilValue(channelsAtom);
  const [message, setMessage] = React.useState("");

  const channelList = channels.map((channel) => (
    <li key={channel.id}>
      <button onClick={() => setSelected(channel.id)} className="text-blue">
        {channel.name}
      </button>
    </li>
  ));

  return (
    <div className="h-full">
      <div className={styles.layout}>
        <header className={styles.header}>
          <img src={logo} className="App-logo" alt="AlphaSense" />
        </header>
        <div className={styles.content}>
          <div className={styles.navigation}>
            <h2 className="font-bold leading-5 text-xl">Messages</h2>
            <ul>{channelList}</ul>
          </div>
          <div className={styles.channel}>
            <div className={styles.messages}>
              {selected && (
                <div className="grid gap-2">
                  <h2 className="font-bold leading-5 text-xl">
                    {channels.find((channel) => channel.id === selected)?.name}
                  </h2>
                  <ul>
                    {channels
                      .find((channel) => channel.id === selected)
                      ?.replies.map((reply) => (
                        <li key={`reply-${reply.id}`}>
                          <div className="flex justify-between flex-col">
                            <p className="text-gray-400">
                              {reply.author} ({reply.timestamp.toLocaleString()}
                              )
                            </p>
                            <p className={styles.reply}>{reply.body}</p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
            {selected && (
              <div className={styles.editor}>
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a new message"
                  type="text"
                  value={message}
                />
                <button
                  className={styles.btn}
                  disabled={!message}
                  onClick={() => {
                    const submission = {
                      id: uuidv4(),
                      body: message,
                      timestamp: new Date(),
                    };
                    console.log(submission);
                    setMessage("");
                  }}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//  Client visuals
// ○ Render a full page application with three panels
// ○ Navigation panel shows a list of channels
// ○ Message list panel shows a list of message bodies for one channel
// ○ Editor panel shows a text area input
// ■ Editor panel is hidden if there is no channel selected
// ■ Editor has a submit button
// ■ Submit button is disabled if there is no text in message body
