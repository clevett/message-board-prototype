import { DefaultValue, selector } from "recoil";
import {
  channelAtomFamily,
  channelIDsAtom,
  selectedChannelAtom,
} from "./atoms";

export const channelListSelector = selector({
  key: "channelListSelector",
  get: ({ get }) => {
    const ids = get(channelIDsAtom);
    const list = ids.map((id) => get(channelAtomFamily(id)));
    return list;
  },
});

export const selectedChannelSelector = selector({
  key: "selectedChannelSelector",
  get: ({ get }) => {
    const id = get(selectedChannelAtom);
    return id ? get(channelAtomFamily(id)) : undefined;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(selectedChannelAtom, newValue);
      return;
    }

    set(selectedChannelAtom, newValue?.id);

    if (newValue) {
      set(channelAtomFamily(newValue.id), newValue);
    }
  },
});
