import React from "react";
import { Links, Meta, Scripts } from "@remix-run/react";
import { Layout } from "./components/Layout";

import { RecoilRoot } from "recoil";

import "./index.css";

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
          <Layout />
        </RecoilRoot>
        <Scripts />
      </body>
    </html>
  );
}
