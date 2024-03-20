import { channelListSelector } from "../recoil/selectors";
import { NavigationButton } from "./NavigationButton";
import { useRecoilValue } from "recoil";
import React from "react";
import styles from "./Navigation.module.scss";
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
      <h2 className="font-bold leading-5 text-xl">Channels</h2>
      <ul>{channelList}</ul>
    </div>
  );
};
