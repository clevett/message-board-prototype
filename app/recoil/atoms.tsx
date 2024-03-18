import { atom } from "recoil";

export const channelsAtom = atom({
  key: "channels",
  default: [
    {
      id: 1,
      name: "Consectetur adipiscing elit",
      replies: [
        {
          id: 1,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
          author: "John Doe",
          timestamp: new Date(),
        },
        {
          id: 2,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
          author: "Jane Smith",
          timestamp: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: "Lorem ipsum dolor",
      replies: [
        {
          id: 1,
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
          author: "John Doe",
          timestamp: new Date(),
        },
      ],
    },
  ],
});

export const selectedChannelAtom = atom<null | number>({
  key: "selectedChannel",
  default: null,
});
