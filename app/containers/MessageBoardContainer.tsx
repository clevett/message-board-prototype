import React from "react";
import { MessageBoard } from "../components/MessageBoard";
import { RecoilSync } from "recoil-sync";
import { useRecoilCallback } from "recoil";
import { channelAtomFamily, channelIDsAtom, userAtom } from "../recoil/atoms";

import { channelsMock, userMock } from "../mocks";
import { Channel, User } from "../recoil/refine";
import { set } from "@recoiljs/refine";
import { RecoilSyncContainer } from "../recoil/RecoilSync";

const getChannels = () =>
  Promise.resolve(channelsMock.map(({ id, name }) => ({ id, name })));

const getUser = () => Promise.resolve(userMock);

// const getChannels = () => channelsMock.map(({ id, name }) => ({ id, name }));
// const getUser = () => userMock;

export const MessageBoardContainer = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // const upliftChannels = useRecoilCallback(
  //   ({ set }) =>
  //     async (channels: Pick<Channel, "id" | "name">[]) => {
  //       const ids = channels.map((c) => c.id);
  //       set(channelIDsAtom, ids);
  //       channels.forEach((c) => {
  //         set(channelAtomFamily(c.id), c);
  //       });
  //     },
  //   []
  // );

  // const upliftUser = useRecoilCallback(
  //   ({ set }) =>
  //     async (user: User) => {
  //       set(userAtom, user);
  //     },
  //   [getUser]
  // );

  // React.useEffect(() => {
  //   Promise.all([getChannels(), getUser()]).then(([channels, user]) => {
  //     upliftChannels(channels);
  //     upliftUser(user);
  //     setIsLoading(false);
  //   });
  // }, []);

  const [channels, setChannels] = React.useState<Channel[]>([]);
  const [user, setUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    Promise.all([getChannels(), getUser()]).then(([channels, user]) => {
      setChannels(channels);
      setUser(user);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const props = { user };
  channels.forEach((c) => (props[`channel-${c.id}`] = c));

  return (
    <RecoilSyncContainer {...props}>
      <MessageBoard />
    </RecoilSyncContainer>
  );
};
