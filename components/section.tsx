import React, { CSSProperties, ReactNode, RefObject } from 'react';

import styles from '../styles/section.module.css';

export interface SectionFactoryProps {
  className?: string;
  children?: ReactNode;
  noContent?: boolean;
  style?: CSSProperties;
}

export interface SectionProps {
  ref?: RefObject<HTMLDivElement>;
  key?: string;
}

const section = ({
  className, children, noContent, style,
}: SectionFactoryProps) => (
  { ref, key }: SectionProps,
) => (
  <section className={`${className} ${noContent ? '' : styles.section}`} style={style} ref={ref} key={key}>
    {noContent ? children : (
      <div className={styles.content}>
        {children}
      </div>
    )}
  </section>
);

export default section;
