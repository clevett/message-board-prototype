export const postMessage = async (id, message) => {
  try {
    const res = await fetch(`/api/v1/messages/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) {
      throw new Error("Failed to fetch messages");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error("error in fetching messages: ", err);
  }
};
