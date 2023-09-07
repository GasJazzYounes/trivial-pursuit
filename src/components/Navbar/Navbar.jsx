import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.link}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles['nav-links']}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructions">Instructions</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
