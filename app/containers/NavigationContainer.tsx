import React from "react";

import { useRecoilCallback } from "recoil";
import { Navigation } from "../components/Navigation";
import { channelAtomFamily } from "../recoil/atoms";
import { Channel } from "../recoil/refine";
import { channelsMock } from "../mocks";

const getChannel = (channelId: string) =>
  Promise.resolve(channelsMock.find(({ id }) => (channelId = id)));

export const NavigationContainer = () => {
  const upliftChannel = useRecoilCallback(
    ({ set }) =>
      async (channel: Channel) => {
        set(channelAtomFamily(channel.id), channel);
      },
    []
  );

  const updateChannel = (id: Channel["id"]) => {
    getChannel(id).then((channel) => {
      console.log("channel", channel);
      if (channel) upliftChannel(channel);
    });
  };

  return <Navigation updateChannel={updateChannel} />;
};
