import React from "react";
import styles from "./Homepage.module.css"; 

function Homepage() {
  return (
    <div className={styles.homepage}> {/* Use the styles from the CSS module */}
      <h2 className={styles["player-name"]}>Player's Name</h2>
      <div className={styles["category-options"]}>
        {/* Include the category dropdown/select and number of questions */}
        {/* Include the "Play" button */}
        <button className={styles["play-button"]}>Play</button>
      </div>
    </div>
  );
}

export default Homepage;
