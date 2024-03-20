import { Channel } from "../recoil/refine";

export const fetchMessages = async (id: Channel["id"]) => {
  try {
    const res = await fetch(`/api/v1/messages/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch messages");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error("error in fetching messages: ", err);
  }
};
