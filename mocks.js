export const userMock = {
  displayName: "Jukka Aho",
  email: "jukka@example.com",
  username: "jukka",
};

export const channelsMock = [
  {
    id: "5b69d49c-fc51-4d24-ab20-74784f8aca46",
    name: "Consectetur adipiscing elit",
    messages: [
      {
        id: "5b69d49c",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
        author: "John Doe",
        timestamp: new Date(),
      },
      {
        id: "fc51",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
        author: "Jane Smith",
        timestamp: new Date(),
      },
    ],
  },
  {
    id: "743e954a-8eea-4bdf-96d0-a34238621f2c",
    name: "Lorem ipsum dolor",
    messages: [
      {
        id: "743e954ac",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
        author: "John Doe",
        timestamp: new Date(),
      },
    ],
  },
  {
    id: "e7f3a8b1-9d4c-4e6e-9e6a-3a7e3e6d2f8d",
    name: "Vestibulum ante ipsum primis",
    messages: [
      {
        id: "e7f3a8b1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
        author: "John Doe",
        timestamp: new Date(),
      },
      {
        id: "9d4c",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ac lacinia tincidunt, nisl nunc tincidunt nunc, ac tincidunt nunc nunc vitae nunc. Ut vitae nunc vitae nunc",
        author: "Jane Smith",
        timestamp: new Date(),
      },
    ],
  },
];

export const getChannel = (channelId) =>
  Promise.resolve(channelsMock.find(({ id }) => channelId === id));

export const getMessages = (channelId) => {
  const channel = channelsMock.find(({ id }) => channelId === id);
  return Promise.resolve(channel?.messages);
};

export const getChannels = () =>
  Promise.resolve(channelsMock.map(({ id, name }) => ({ id, name })));

export const getUser = () => Promise.resolve(userMock);
