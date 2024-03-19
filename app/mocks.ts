import { v4 as uuidv4 } from "uuid";
import { Channel, User } from "./recoil/refine";

export const userMock: User = {
  displayName: "Jukka Aho",
  email: "jukka@example.com",
  username: "jukka",
};

export const channelsMock: Channel[] = [
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
