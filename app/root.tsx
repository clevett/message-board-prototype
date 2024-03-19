import React from "react";
import { Links, Meta, Scripts } from "@remix-run/react";

import { RecoilRoot } from "recoil";

import "./index.scss";
import { MessageBoardContainer } from "./containers/MessageBoardContainer";

export default function App() {
  return (
    <html className="h-full">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <RecoilRoot>
          <MessageBoardContainer />
        </RecoilRoot>
        <Scripts />
      </body>
    </html>
  );
}
