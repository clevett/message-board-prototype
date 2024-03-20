export const fetchChannels = async () => {
  try {
    const res = await fetch("/api/v1/channels");
    if (!res.ok) {
      throw new Error("Failed to fetch channels");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error("error in fetching channels: ", err);
  }
};
