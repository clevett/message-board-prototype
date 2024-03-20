import { createRequestHandler } from "@remix-run/express";
import express from "express";

const database = {
  channels: [],
  messages: [],
};

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();
app.use(
  viteDevServer ? viteDevServer.middlewares : express.static("build/client")
);

app.get("/api/v1/channels", async (req, res) => {
  const getChannels = () => Promise.resolve(database.channels);
  await getChannels().then((data) => res.send(data));
});

app.get("/api/v1/messages/:channelId", async (req, res) => {
  const channelId = req.params.channelId;

  const getMessages = (id) => {
    return Promise.resolve(
      database.messages.filter(({ channelId }) => channelId === id)
    );
  };

  await getMessages(channelId).then((data) => res.send(data));
});

app.use(express.json());

app.post("/api/v1/:channelId", (req, res) => {
  const { message } = req.body;
  database.messages.push(message);
  res.send("message sent");
});

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("./build/server/index.js");

app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");

  for (let i = 0; i < 5; i++) {
    const id = Math.random().toString(36).substring(7);
    const name = `Channel ${i + 1}`;
    database.channels.push({ id, name });
  }
});
