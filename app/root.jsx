import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { Layout } from "./Layout";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
