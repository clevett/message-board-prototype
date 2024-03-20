import React from "react";
import { RecoilSync } from "recoil-sync";

export const RecoilSyncContainer = ({ children, ...props }) => {
  return (
    <RecoilSync
      storeKey="init-from-props"
      read={(itemKey: string | number) => props[itemKey]}
      listen={({ updateItem }) => {
        //Use this to subscribe to changes in the database
        //Sync these changes with the local state in the Recoil store
        //This will allow users to see submissions made by other users
      }}
    >
      {children}
    </RecoilSync>
  );
};
