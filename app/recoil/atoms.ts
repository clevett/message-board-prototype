import { atom, atomFamily } from "recoil";
import {
  Channel,
  User,
  optionalChannelChecker,
  optionalUserChecker,
} from "./refine";
import { syncEffect } from "recoil-sync";

export const selectedChannelAtom = atom<Channel["id"] | undefined>({
  key: "selectedChannelAtom",
  default: undefined,
});

export const channelIDsAtom = atom<string[]>({
  key: "channelIDsAtom",
  default: [],
});

export const channelAtomFamily = atomFamily<Channel | undefined, string>({
  key: "channelAtomFamily",
  default: undefined,
  effects: (param) => [
    syncEffect({
      itemKey: `channel-${param}`,
      storeKey: "init-from-props",
      refine: optionalChannelChecker,
    }),
  ],
});

export const userAtom = atom<User | undefined>({
  key: "userAtom",
  default: undefined,
  effects: [
    syncEffect({
      itemKey: "user",
      storeKey: "init-from-props",
      refine: optionalUserChecker,
    }),
  ],
});
