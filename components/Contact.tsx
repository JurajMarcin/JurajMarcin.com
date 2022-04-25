import React from 'react';
import {
  FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn,
} from 'react-icons/fa';
import section from './section';

import styles from '../styles/Contact.module.css';
import ContactLink from './ContactLink';

const Contact = section({
  className: styles.contact,
  title: 'Contact Me',
  children: (
    <article>
      <ContactLink icon={<FaEnvelope />} href="mailto:hello@jurajmarcin.com">hello@jurajmarcin.com</ContactLink>
      <ContactLink icon={<FaGithub />} href="https://github.com/JurajMarcin">@JurajMarcin</ContactLink>
      <ContactLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/juraj-marcin/">@juraj-marcin</ContactLink>
      <ContactLink icon={<FaInstagram />} href="https://www.instagram.com/juraj_marcin/">@juraj_marcin</ContactLink>
    </article>
  ),
});

export default Contact;
