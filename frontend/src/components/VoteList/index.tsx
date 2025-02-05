import { Vote } from "@/utils/votes";
import { Card } from "@tritonse/tse-constellation";
import styles from "./styles.module.css";

export const VoteList = ({ votes }: { votes?: Vote[] }) => {
  return (
    <div className={styles.votesContainer}>
      <h2>Votes:</h2>
      {votes && votes.length === 0 ? (
        <p>No votes yet!</p>
      ) : (
        votes?.map((vote) => (
          <Card
            key={vote._id}
            contents={
              <>
                <p>{vote.favoriteClass}</p>
                <p>- {vote.username}</p>
              </>
            }
            style={{
              border: "1px dashed black"
            }}
          />
        ))
      )}
    </div>
  );
};
