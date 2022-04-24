import React from 'react';

import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/#" className="quietLink">
      <h1 className={styles.title}>
        Juraj Marcin
        <span className={styles.titleAccent}>.</span>
      </h1>
    </a>
  </header>
);

export default Header;
