import React, { useMemo, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavContext, { NavSections } from '../store/NavContext';

import styles from '../styles/Navigation.module.css';

interface NavigationProps {
  scrollY: number;
  navSections: NavSections;
}

const Navigation = ({ scrollY, navSections }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const scrolled = useMemo(() => scrollY > ((typeof window !== 'undefined' && window.innerHeight) || 0) / 2, [scrollY]);

  return (
    <NavContext.Consumer>
      {({ navigate, hash: activeSection }) => (
        <>
          <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
            <ul className={styles.navMenu}>
              {Object.entries(navSections).map(([hash, { name }]) => (
                <li className={styles.navItem} key={hash}>
                  <a
                    className={`quietLink ${styles.navLink} ${activeSection === hash ? styles.navLinkActive : ''}`}
                    href={`#${hash}`}
                    onClick={() => navigate(hash)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.navButtonContainer}>
            <button
              className={styles.navButton}
              style={{ backgroundColor: scrolled ? '#000' : undefined }}
              type="button"
              onClick={() => setOpen(!open)}
              onBlur={() => setOpen(false)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </>
      )}
    </NavContext.Consumer>
  );
};

export default Navigation;
