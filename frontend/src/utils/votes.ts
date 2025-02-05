const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface Vote {
  username: string;
  favoriteClass: string;
  _id: string;
}

export const listVotes = async () => {
  const response = await fetch(`/api/vote`);
  const json = (await response.json()) as Vote[];
  return json;
};

export const createVote = async (username: string, favoriteClass: string) => {
  const response = await fetch(`/api/vote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, favoriteClasses: favoriteClass })
  });
  const json = (await response.json()) as Vote;
  return json;
};
