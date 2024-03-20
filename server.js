import { createRequestHandler } from "@remix-run/express";
import express from "express";

import { getChannels, getMessages } from "./mocks.js";

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
  await getChannels().then((data) => res.send(data));
});

app.get("/api/v1/messages/:channelId", async (req, res) => {
  const channelId = req.params.channelId;
  await getMessages(channelId).then((data) => res.send(data));
});

app.post("/api/v1/messages/:channelId", (req, res) => {
  const channelId = req.params.channelId;
  const message = req.body;
  console.table({
    channelId,
    message,
  });
  //res.send("message sent");
});

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("./build/server/index.js");

app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
