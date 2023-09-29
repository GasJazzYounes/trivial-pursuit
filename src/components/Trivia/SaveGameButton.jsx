import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import app from "../../Firebase";

function SaveGameButton({ playerName, userAnswers, questions, playAgain }) {
  const [saveMessage, setSaveMessage] = useState("");

  const disableButton = (e) => {
    const button = e.target;
    button.disabled = true;
    button.classList.add("disabled");
  };

  const saveGame = async () => {
    try {
      const database = getDatabase(app);
      const dbRef = ref(database);
      const score = userAnswers.filter(
        (answer, index) => answer === questions[index].correct_answer
      ).length;

      const percentage = (score / questions.length) * 100;

      const player = {
        playerName: playerName,
        playerScore: `${score}/${questions.length} (${percentage} %)`,
        playerPosition: percentage,
      };

      await push(dbRef, player);
      setSaveMessage("Game data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      setSaveMessage("Failed to save game data.");
    }
  };

   return (
     <div>
       <div className="finish-buttons">
         <button
           className="trivia-button"
           onClick={(e) => {
             saveGame();
             disableButton(e);
           }}
         >
           Save Game
         </button>
         <button className="play-again trivia-button" onClick={playAgain}>
           Play Again
         </button>
       </div>
       {saveMessage && <div className="save-message">{saveMessage}</div>}
     </div>
   );
}

export default SaveGameButton;
