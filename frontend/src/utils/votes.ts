const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface Vote {
  username: string;
  favoriteClass: string;
  _id: string;
}

export const listVotes = async () => {
  /*
  Fix #1: The backendUrl was missing from the fetch requests in "listVotes" and "createVote",
  making the frontend's requests go to the frontend instead (default for fetch is to 
  go to the current origin) instead of to the backend as cross-origin requests.
  This can be found either by already knowing that "fetch" should take an origin to make
  it cross-origin, or by looking at the network requests logs and noticing that they are
  going to the frontend instead of the backend (either from the response host or the fact
  that a NextJS instead of ExpressJS error page is returned).
  */
  const response = await fetch(`${backendUrl}/api/vote`);
  const json = (await response.json()) as Vote[];
  return json;
};

export const createVote = async (username: string, favoriteClass: string) => {
  const response = await fetch(`${backendUrl}/api/vote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    /*
    Fix #4: "favoriteClass" was misspelled as "favoriteClasses", leading to the backend returning
    a 400 Bad Request since "favoriteClass" was not present in the request body.
    This can be found either by looking at the code carefully to notice the typo, or tracing
    through the backend response to find the error message about "favoriteClass" being required,
    and looking at the request body to see it has "favoriteClasses" instead of "favoriteClass".
    */
    body: JSON.stringify({ username: username, favoriteClass: favoriteClass })
  });
  const json = (await response.json()) as Vote;
  return json;
};
