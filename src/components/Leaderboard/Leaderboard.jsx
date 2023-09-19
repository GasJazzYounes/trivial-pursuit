import React, { useEffect, useState } from "react";
import app from '../../Firebase';
import { getDatabase, ref, onValue, get } from "firebase/database";

function Leaderboard() {

  const database = getDatabase(app);
  const dbRef = ref(database);

  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    onValue(dbRef, (res) => {
      const data = res.val();
      const players = [];
      for (let key in data) {
        players.push(data[key])
      }
      setPlayerInfo(players);
    })
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      {playerInfo.map(player => {
        return (
          <>
            <p>{player.playerName}</p>
            <p>{player.playerScore}</p>
          </>
        )
      })}
      {/* <p>This is the leaderboard page. Here you can view the top players.</p> */}
      {/* You can add a table or any other content to display the leaderboard data */}
    </div>
  );
}

export default Leaderboard;
