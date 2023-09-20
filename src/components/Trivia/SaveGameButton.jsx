import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import app from '../../Firebase';

function SaveGameButton({ playerName, userAnswers, questions }) {
  const [saveMessage, setSaveMessage] = useState('');

  const saveGame = async () => {
    try {
      const database = getDatabase(app);
      const dbRef = ref(database);
      const score = userAnswers.filter(
        (answer, index) => answer === questions[index].correct_answer
      ).length;

      const player = {
        playerName: playerName,
        playerScore: `${score}/${questions.length}`,
      };

      await push(dbRef, player);
      setSaveMessage('Game data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      setSaveMessage('Failed to save game data.');
    }
  };

  return (
    <div>
      <button onClick={saveGame}>Save Game</button>
      {saveMessage && <div className="save-message">{saveMessage}</div>}
    </div>
  );
}

export default SaveGameButton;
