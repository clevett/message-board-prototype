import { object, string, number } from "@recoiljs/refine";

export type Channel = {
  id: string;
  name: string;
  replies: {
    id: string;
    body: string;
    timestamp: Date;
    author: string;
  }[];
};

export type User = {
  displayName: string;
  email: string;
  username: string;
};

export const channelChecker = object({
  id: number(),
  name: string(),
  replies: object({
    author: string(),
    body: string(),
    id: number(),
    timestamp: string(),
  }),
});
