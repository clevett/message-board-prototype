import React from "react";

import { useRecoilState, useSetRecoilState } from "recoil";
import {
  channelAtomFamily,
  messagesLoading,
  selectedChannelIdAtom,
} from "../recoil/atoms";

import { Channel } from "../recoil/refine";

import { fetchMessages } from "../helpers/fetch-messages";

export const NavigationButton = ({ id }) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedChannelIdAtom);
  const [channel, setChannel] = useRecoilState(channelAtomFamily(id));
  const setIsLoading = useSetRecoilState(messagesLoading);

  const handleClick = async (channelId: Channel["id"]) => {
    if (selectedId === channelId) return;

    setSelectedId(channelId);

    if (channel && !channel.messages) {
      setIsLoading(true);

      const messages = await fetchMessages(channelId);

      if (messages) {
        setChannel({ ...channel, messages });
      } else {
        console.error("Failed to load channel");
      }

      setIsLoading(false);
    }
  };

  return (
    <button
      className={selectedId === id ? "font-bold" : ""}
      onClick={() => handleClick(id)}
    >
      {channel?.name}
    </button>
  );
};
