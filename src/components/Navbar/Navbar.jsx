import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles['nav-links']}>
        <li><Link to="/">Play</Link></li>
        <li><Link to="/instructions">Learn</Link></li>
        <li><Link to="/leaderboard">Scores</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
