import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  channelListSelector,
  selectedChannelSelector,
} from "../recoil/selectors";
import styles from "./Navigation.module.scss";
import { Channel } from "../recoil/refine";

type NavigationProps = {
  updateChannel: (id: Channel["id"]) => void;
};

export const Navigation = ({ updateChannel }: NavigationProps) => {
  const channels = useRecoilValue(channelListSelector);
  const [selected, setSelected] = useRecoilState(selectedChannelSelector);

  const channelList = channels.map(
    (channel) =>
      channel && (
        <li key={channel.id}>
          <button
            onClick={() => {
              if (selected?.id === channel.id) return;

              if (!selected?.replies) {
                updateChannel(channel.id);
              } else {
                setSelected(channel);
              }
            }}
            className={selected?.id === channel.id ? "font-bold" : ""}
          >
            {channel.name}
          </button>
        </li>
      )
  );

  return (
    <div className={styles.navigation}>
      <h2 className="font-bold leading-5 text-xl">Messages</h2>
      <ul>{channelList}</ul>
    </div>
  );
};
