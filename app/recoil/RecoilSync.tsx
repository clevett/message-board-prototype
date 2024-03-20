import React from "react";
import { RecoilSync } from "recoil-sync";

export const RecoilSyncContainer = ({ children, ...props }) => {
  return (
    <RecoilSync
      storeKey="init-from-props"
      read={(itemKey: string | number) => props[itemKey]}
      write={({ diff }) => {
        for (const [key, value] of diff) {
          //Use this to write state changes to the database
        }
      }}
      listen={({ updateItem }) => {
        //Use this to subscribe to changes in the database
        //Sync these changes with the local changes in the Recoil store
      }}
    >
      {children}
    </RecoilSync>
  );
};
