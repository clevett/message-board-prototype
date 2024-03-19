import React from "react";
import { RecoilSync } from "recoil-sync";
import { Channel, User } from "./refine";

type RecoilSyncContainerProps = {
  //   channels: Pick<Channel, "id" | "name">[];
  user: User;
  children: React.ReactNode;
};

export const RecoilSyncContainer = ({
  children,
  ...props
}: RecoilSyncContainerProps) => {
  return (
    <RecoilSync
      storeKey="init-from-props"
      read={(itemKey: string | number) => {
        console.table({
          label: "Read",
          itemKey,
          value: props[itemKey],
        });
        return props[itemKey];
      }}
      write={({ diff }) => {
        for (const [key, value] of diff) {
          //connection.set(key, value);
          console.log("DIFF", {
            key,
            value,
          });
        }
      }}
      listen={({ updateItem }) => {
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
