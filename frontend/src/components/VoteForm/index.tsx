import { Button, Dropdown, TextField } from "@tritonse/tse-constellation";
import styles from "./styles.module.css";
import { FormEvent, useState } from "react";
import { createVote } from "@/utils/votes";

export const VoteForm = ({ loadVotes }: { loadVotes: () => unknown }) => {
  const [username, setUsername] = useState("");
  const [favoriteClass, setFavoriteClass] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createVote(username, favoriteClass)
      .then(() => {
        loadVotes();
        setUsername("");
        setFavoriteClass("");
      })
      .catch((error) => {
        alert(`Could not create vote: ${error}`);
      });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h2>Cast your vote</h2>
      <TextField label="Username" value={username} onChange={setUsername} />
      <Dropdown
        label="Favorite class"
        options={[
          { label: "CSE 12" },
          { label: "CSE 30" },
          { label: "CSE 110" }
        ]}
        value={favoriteClass}
        onChange={setFavoriteClass}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
