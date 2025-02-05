"use client";

import styles from "./page.module.css";
import { VoteForm } from "@/components/VoteForm";
import { VoteList } from "@/components/VoteList";
import { listVotes, Vote } from "@/utils/votes";
import { useEffect, useState } from "react";

export default function Home() {
  const [votes, setVotes] = useState<Vote[]>();

  const loadVotes = () => {
    listVotes()
      .then(setVotes)
      .catch((error) => {
        alert(`Could not fetch votes: ${error}`);
      });
  };

  useEffect(loadVotes, []);

  return (
    <div className={styles.page}>
      <h1>Vote on your favorite class!</h1>
      <VoteList votes={votes} />
      <VoteForm loadVotes={loadVotes} />
    </div>
  );
}
