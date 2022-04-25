import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import section from './section';

import styles from '../styles/Contact.module.css';
import ContactLink from './ContactLink';

const Contact = section({
  className: styles.contact,
  children: (
    <>
      <header>
        <h2 className={styles.title}>Contact Me</h2>
      </header>
      <div className={styles.contactList}>
        <ContactLink icon={<FaEnvelope />} href="mailto:hello@jurajmarcin.com">hello@jurajmarcin.com</ContactLink>
        <ContactLink icon={<FaGithub />} href="https://github.com/JurajMarcin">@JurajMarcin</ContactLink>
        <ContactLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/juraj-marcin/">@juraj-marcin</ContactLink>
        <ContactLink icon={<FaInstagram />} href="https://www.instagram.com/juraj_marcin/">@juraj_marcin</ContactLink>
      </div>
    </>
  ),
});

export default Contact;
