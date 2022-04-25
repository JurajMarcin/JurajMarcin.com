import React, { ReactNode } from 'react';

import styles from '../styles/EduExpItem.module.css';

export interface EduExpProps {
  name: ReactNode;
  from: string;
  to: string;
  title?: ReactNode;
  href?: string;
  items: ReactNode[];
}

const EduExpItem = ({
  name, from, to, title, href, items,
}: EduExpProps) => (
  <div>
    <header className={styles.header}>
      <h3 className={styles.name}>
        {href ? (
          <a href={href} className="quietLink">{name}</a>
        ) : name}
      </h3>
      {title ? (
        <>
          <span className={styles.sep} />
          <h4 className={styles.title}>{title}</h4>
        </>
      ) : null}
    </header>
    <div className={styles.time}>
      <span className={styles.timeFrom}>{from}</span>
      &ndash;
      <span className={styles.timeTo}>{to}</span>
    </div>
    <ul className={styles.list}>
      {items.map((item) => <li key={item?.toString()}>{item}</li>)}
    </ul>
  </div>
);

export default EduExpItem;
