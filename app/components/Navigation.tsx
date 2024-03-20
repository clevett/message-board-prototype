import React from "react";
import { useRecoilValue } from "recoil";
import { channelListSelector } from "../recoil/selectors";
import styles from "./Navigation.module.scss";
import { NavigationButton } from "./NavigationButton";

export const Navigation = () => {
  const channels = useRecoilValue(channelListSelector);

  const channelList = channels.map(
    (channel) =>
      channel && (
        <li key={channel.id}>
          <NavigationButton id={channel.id} />
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
