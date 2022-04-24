import React, { ReactNode } from 'react';

import styles from '../styles/Skills.module.css';

interface SkillProps {
  title: ReactNode;
  children: ReactNode;
}

const Skill = ({ title, children }: SkillProps) => (
  <div className={styles.skill}>
    <h4 className={styles.skillTitle}>{title}</h4>
    <p>{children}</p>
  </div>
);

export default Skill;
