import React, { useEffect, useState } from "react";
import app from "../../Firebase";
import { getDatabase, ref, onValue, get } from "firebase/database";
import styles from "./Leaderboard.module.css";
function Leaderboard() {
  const database = getDatabase(app);
  const dbRef = ref(database);

  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    onValue(dbRef, (res) => {
      const data = res.val();
      const players = [];
      for (let key in data) {
        players.push(data[key]);
      }
      setPlayerInfo(players);
    });
  }, []);

  return (
    <div className={styles.leaderBoard}>
      <h2>Leaderboard</h2>
      {playerInfo
        .sort((a, b) => {
          return b.playerPosition - a.playerPosition;
        })
        .map((player, index) => {
          return (
            <div className={styles.players} key={index}>
              <p>{player.playerName}</p>
              <p>{player.playerScore}</p>
            </div>
          );
        })}
      {/* <p>This is the leaderboard page. Here you can view the top players.</p> */}
      {/* You can add a table or any other content to display the leaderboard data */}
    </div>
  );
}

export default Leaderboard;
