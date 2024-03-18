import React from "react";

export const Layout = () => {
  return (
    <div>
      <h1>AlphaSense Message Board (Prototype)</h1>
      <div>
        <h1>Content</h1>
      </div>
      <footer>
        {"Copyright © "}
        {new Date().getFullYear()}.
      </footer>
    </div>
  );
};
