import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

function SaveGameButton({ userAnswers, questions, onSaveGame }) {
  const saveGame = () => {
    // Save the game to Firebase
    db.collection('savedGames').add({
      questions,
      userAnswers,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log('Game saved successfully');
      onSaveGame(); // Call the parent component's onSaveGame function
    })
    .catch(err => console.error('Error saving game:', err));
  };

  return (
    <button onClick={saveGame}>Save Game</button>
  );
}

export default SaveGameButton;
