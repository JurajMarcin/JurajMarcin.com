import React from 'react';
import section from './section';
import NavContext from '../store/NavContext';

import styles from '../styles/Home.module.css';

const Home = section({
  className: styles.home,
  children: (
    <NavContext.Consumer>
      {({ navigate }) => (
        <div className={styles.homeContent}>
          <div className={styles.info}>
            Programmer \
            <br />
            Web Developer \
            <br />
            Hobbyist Photographer
          </div>
          <div className={styles.action}>
            <button className={styles.homeButton} type="button" onClick={() => navigate('about')}>
              More about me
            </button>
          </div>
        </div>
      )}
    </NavContext.Consumer>
  ),
});

export default Home;
