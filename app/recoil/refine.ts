import {
  array,
  Checker,
  date,
  object,
  optional,
  string,
} from "@recoiljs/refine";

export type Channel = {
  id: string;
  name: string;
  messages?: Message[];
};

export type Message = {
  author: string;
  body: string;
  channelId: string;
  id: string;
  timestamp: Date;
};
export type User = {
  displayName: string;
  email: string;
  username: string;
};

export const channel = object({
  id: string(),
  name: string(),
  messages: optional(
    array(
      object({
        author: string(),
        body: string(),
        id: string(),
        timestamp: date(),
        channelId: string(),
      })
    )
  ),
});

export const user = object({
  displayName: string(),
  email: string(),
  username: string(),
});

export const createOptionalChecker = <T>(
  checker: Checker<T>
): Checker<T | undefined> => {
  return (value, path) => {
    if (value === undefined) {
      return { type: "success", value: undefined, warnings: [] };
    } else {
      return checker(value, path);
    }
  };
};

export const optionalUserChecker: Checker<User | undefined> =
  createOptionalChecker(user);
export const optionalChannelChecker: Checker<Channel | undefined> =
  createOptionalChecker(channel);
