import React from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="logo.png" alt="Logo" className={styles.logo} />
      <ul className={styles['nav-links']}>
        <li>Home</li>
        <li>Instructions</li>
        <li>Leaderboard</li>
      </ul>
    </div>
  );
}

export default Navbar;

