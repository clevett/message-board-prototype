import React from "react";
import { MessageBoard } from "../components/MessageBoard";
import { RecoilSync } from "recoil-sync";
import { useRecoilCallback } from "recoil";
import { channelAtomFamily, channelIDsAtom, userAtom } from "../recoil/atoms";
import { v4 as uuidv4 } from "uuid";

export const MessageBoardContainer = () => {
  const loggedInUser = {
    displayName: "Jukka Aho",
    email: "jukka@example.com",
    username: "jukka",
  };
  const data = [
    {
      id: uuidv4(),
      name: "Consectetur adipiscing elit",
      replies: [
        {
          id: uuidv4(),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
          author: "John Doe",
          timestamp: new Date(),
        },
        {
          id: uuidv4(),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
          author: "Jane Smith",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: uuidv4(),
      name: "Lorem ipsum dolor",
      replies: [
        {
          id: uuidv4(),
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
          author: "John Doe",
          timestamp: new Date(),
        },
      ],
    },
  ];

  const upliftChannels = useRecoilCallback(
    ({ set }) =>
      async () => {
        const ids = data.map((c) => c.id);
        set(channelIDsAtom, ids);
        data.forEach((c) => {
          set(channelAtomFamily(c.id), c);
        });
      },
    [data]
  );

  const upliftUser = useRecoilCallback(
    ({ set }) =>
      async () => {
        set(userAtom, loggedInUser);
      },
    [loggedInUser]
  );

  React.useEffect(() => {
    upliftChannels();
    upliftUser();
  }, [data]);

  return (
    <RecoilSync
      storeKey="init-from-data"
      read={(itemKey: string | number) => data[itemKey]}
      write={({ diff }) => {
        for (const [key, value] of diff) {
          //connection.set(key, value);
          console.log({
            key,
            value,
          });
        }
      }}
      //   listen={({ updateItem }) => {
      //     const subscription = connection.subscribe((key, value) => {
      //       updateItem(key, value);
      //     });
      //     return () => subscription.release();
      //   }}
    >
      <MessageBoard />
    </RecoilSync>
  );
};
