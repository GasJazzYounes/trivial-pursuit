import React from 'react';
import { getDatabase, ref, push } from "firebase/database";
import app from '../../Firebase';

function SaveGameButton({ playerName, userAnswers, questions }) {
  const saveGame = () => {
    const database = getDatabase(app);
    const dbRef = ref(database);
    const score = userAnswers.filter((answer, index) => answer === questions[index].correct_answer).length;

    const player = {
      playerName: playerName,
      playerScore: `${score}/${questions.length}`
    }

    push(dbRef, player);

    // Add the logic to save the game here (firebase integration pending)

    // Example logic (you can customize this):
    // const gameData = {
    //   questions,
    //   userAnswers,
    //   timestamp: new Date().toISOString(),
    // };
    // YourCustomSaveFunction(gameData);

  };

  return (
    <button onClick={saveGame}>Save Game</button>
  );
}

export default SaveGameButton;
