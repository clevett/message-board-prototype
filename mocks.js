export const userMock = {
  displayName: "Jukka Aho",
  email: "jukka@example.com",
  username: "jukka",
};

export const channelsMock = [
  {
    id: "5b69d49c-fc51-4d24-ab20-74784f8aca46",
    name: "Cats",
  },
  {
    id: "743e954a-8eea-4bdf-96d0-a34238621f2c",
    name: "Dogs",
  },
  {
    id: "e7f3a8b1-9d4c-4e6e-9e6a-3a7e3e6d2f8d",
    name: "Birds",
  },
  {
    id: "9d4c",
    name: "Fish",
  },
  {
    id: "a34238621f2c",
    name: "Hamsters",
  },
];

export const messagesMock = [
  {
    id: "5b69d49c",
    body: "I love cats!",
    author: "Liam Nguyen",
    timestamp: new Date(),
    channelId: "5b69d49c-fc51-4d24-ab20-74784f8aca46",
  },
  {
    id: "fc51",
    body: "Me too! Cats are the best.",
    author: "Olivia Patel",
    timestamp: new Date(),
    channelId: "5b69d49c-fc51-4d24-ab20-74784f8aca46",
  },
  {
    id: "743e954ac",
    body: "I have a cute dog named Max.",
    author: "Noah Kim",
    timestamp: new Date(),
    channelId: "743e954a-8eea-4bdf-96d0-a34238621f2c",
  },
  {
    id: "e7f3a8b1",
    body: "That's awesome! Dogs make great companions.",
    author: "Emma Lee",
    timestamp: new Date(),
    channelId: "743e954a-8eea-4bdf-96d0-a34238621f2c",
  },
  {
    id: "9d4c",
    body: "I have two birds, Luna and Oliver.",
    author: "William Rodriguez",
    timestamp: new Date(),
    channelId: "e7f3a8b1-9d4c-4e6e-9e6a-3a7e3e6d2f8d",
  },
];

export const getMessages = (id) => {
  return Promise.resolve(
    messagesMock.filter(({ channelId }) => channelId === id)
  );
};

export const getChannels = () => Promise.resolve(channelsMock);
