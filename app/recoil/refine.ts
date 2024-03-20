import {
  object,
  string,
  number,
  Checker,
  optional,
  date,
  array,
} from "@recoiljs/refine";

export type Channel = {
  id: string;
  name: string;
  messages?: {
    author: string;
    body: string;
    id: string;
    timestamp: Date;
  }[];
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
      })
    )
  ),
});

export const user = object({
  displayName: string(),
  email: string(),
  username: string(),
});

export const optionalUserChecker: Checker<User | undefined> = (value, path) => {
  if (value === undefined) {
    return { type: "success", value: undefined, warnings: [] };
  } else {
    return user(value, path);
  }
};

export const optionalChannelChecker: Checker<Channel | undefined> = (
  value,
  path
) => {
  if (value === undefined) {
    return { type: "success", value: undefined, warnings: [] };
  } else {
    return channel(value, path);
  }
};
