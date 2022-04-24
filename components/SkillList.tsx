import React, { ReactNode } from 'react';

import styles from '../styles/Skills.module.css';

interface SkillListProps {
  children: ReactNode,
}

const SkillList = ({ children }: SkillListProps) => (
  <>
    <h3 className={styles.skillsTitle}>My Skills</h3>
    <div className={styles.skills}>
      {children}
    </div>
  </>
);

export default SkillList;
