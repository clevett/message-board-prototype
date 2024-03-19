import { atom, atomFamily } from "recoil";
import { Channel, User } from "./refine";

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
});

export const userAtom = atom<User | undefined>({
  key: "userAtom",
  default: undefined,
});
