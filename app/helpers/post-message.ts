import { Channel, Message } from "../recoil/refine";

export const postMessage = async (
  channelId: Channel["id"],
  message: Message
) => {
  try {
    const response = await fetch(`/api/v1/${channelId}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to post message");
    }

    return response.ok;
  } catch (err) {
    return console.error("error in fetching messages: ", err);
  }
};
