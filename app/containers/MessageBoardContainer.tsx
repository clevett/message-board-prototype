import { Channel } from "../recoil/refine";
import { channelAtomFamily, channelIDsAtom } from "../recoil/atoms";
import { fetchChannels } from "../helpers/fetch-channels";
import { MessageBoard } from "../components/MessageBoard";
import { RecoilSyncContainer } from "../recoil/RecoilSync";
import { useRecoilCallback } from "recoil";
import React from "react";

export const user = {
  displayName: "Jukka Aho",
  email: "jukka@example.com",
  username: "jukka",
};

export const MessageBoardContainer = () => {
  const [channels, setChannels] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  const upliftChannels = useRecoilCallback(
    ({ set }) =>
      async (channels: Pick<Channel, "id" | "name">[]) => {
        const ids = channels.map((c) => c.id);
        set(channelIDsAtom, ids);
        channels.forEach((c) => set(channelAtomFamily(c.id), c));
      },
    []
  );

  React.useEffect(() => {
    Promise.all([fetchChannels()]).then(([c]) => {
      setChannels(c);
      setIsLoading(false);

      if (!channels) {
        upliftChannels(c);
      }
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const props = { user };
  channels.forEach((c: Channel) => (props[`channel-${c.id}`] = c));

  return (
    <RecoilSyncContainer children={undefined} {...props}>
      <MessageBoard />
    </RecoilSyncContainer>
  );
};
