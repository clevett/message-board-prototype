import React from "react";
import { RecoilSync } from "recoil-sync";

export const RecoilSyncContainer = ({ children, ...props }) => {
  return (
    <RecoilSync
      storeKey="init-from-props"
      read={(itemKey: string | number) => props[itemKey]}
      write={({ diff }) => {
        for (const [key, value] of diff) {
          console.log("DIFF", {
            key,
            value,
          });
        }
      }}
      listen={({ updateItem }) => {
        //console.log("LISTEN", updateItem);
        // const subscription = connection.subscribe((key, value) => {
        //   updateItem(key, value);
        // });
        // return () => subscription.release();
      }}
    >
      {children}
    </RecoilSync>
  );
};
