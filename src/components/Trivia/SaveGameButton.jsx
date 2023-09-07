import React from 'react';

function SaveGameButton({ onSaveGame }) {
  const saveGame = () => {
    // Add the logic to save the game here (firebase integration pending)

    // Example logic (you can customize this):
    // const gameData = {
    //   questions,
    //   userAnswers,
    //   timestamp: new Date().toISOString(),
    // };
    // YourCustomSaveFunction(gameData);

    // Notify the parent component that the game is saved
    onSaveGame();
  };

  return (
    <button onClick={saveGame}>Save Game</button>
  );
}

export default SaveGameButton;
