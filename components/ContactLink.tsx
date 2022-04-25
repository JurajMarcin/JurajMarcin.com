import React, { ReactNode } from 'react';

import styles from '../styles/ContactLink.module.css';

export interface ContactLinkProps {
  icon: ReactNode;
  href: string;
  children: ReactNode;
}

const ContactLink = ({ icon, href, children }: ContactLinkProps) => (
  <div className={styles.contactLink}>
    <a className="quietLink" href={href}>
      <span className={styles.icon}>{icon}</span>
      <span>{children}</span>
    </a>
  </div>
);

export default ContactLink;
