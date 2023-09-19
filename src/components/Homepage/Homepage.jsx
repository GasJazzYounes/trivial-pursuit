import React, { useState } from "react";
import styles from "./Homepage.module.css";
import Trivia from '../Trivia/Trivia'; 

function Homepage() {
  const [showTrivia, setShowTrivia] = useState(false); // State to control whether to show Trivia
  const [playerName, setPlayerName] = useState(""); // State to store the player's name

  const handlePlayClick = () => {
    if (playerName) {
      setShowTrivia(true); // Show Trivia when the "Play" button is clicked
    }
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value); // Update the player's name as the user types
  };

  return (
    <div className={styles.homepage}>
      {!showTrivia && ( // Only show the input field if Trivia is not shown
        <div>
          <h1>Trivia Game App</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={handleNameChange}
            className={styles["select-dropdown"]}
            required
          />
          <button onClick={handlePlayClick}
          className={styles["play-button"]}>Play</button>
        </div>
      )}
      {showTrivia && (
        <div className={styles["good-luck-message"]}>
          Good luck, {playerName}! {/* Insert playerName here */}
        </div>
      )}
      {showTrivia && <Trivia playerName={playerName} />} {/* Pass playerName to Trivia */}
    </div>
  );
}

export default Homepage;





