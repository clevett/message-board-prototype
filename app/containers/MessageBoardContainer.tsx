import React from "react";
import { MessageBoard } from "../components/MessageBoard";
import { useRecoilCallback } from "recoil";
import { channelAtomFamily, channelIDsAtom } from "../recoil/atoms";
import { fetchChannels } from "../helpers/fetch-channels";

import { getUser } from "../../mocks";
import { Channel } from "../recoil/refine";
import { RecoilSyncContainer } from "../recoil/RecoilSync";

export const MessageBoardContainer = () => {
  const [channels, setChannels] = React.useState(undefined);
  const [user, setUser] = React.useState(undefined);
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
    Promise.all([fetchChannels(), getUser()]).then(([c, u]) => {
      setChannels(c);
      setUser(u);
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
  channels.forEach((c) => (props[`channel-${c.id}`] = c));

  return (
    // <RecoilSyncContainer {...props}>
    <MessageBoard />
    // </RecoilSyncContainer>
  );
};
