import React from 'react';
import section from './section';
import EduExpItem from './EduExpItem';

const Experience = section({
  style: {
    color: 'var(--light-foreground)',
    background: 'var(--light-background)',
  },
  title: 'Experience',
  children: (
    <article>
      <EduExpItem
        name="Leveland Group"
        title="Full Stack Developer"
        from="July 2020"
        to="present"
        href="https://www.levelandgroup.com/"
        items={[
          <>
            Development and deployment of a full-stack web application for managing events and
            conferences including ticket sales, talk &amp; speaker management, ticket validation
            through Discord bot
          </>,
          <>
            Built using MERN stack and deployed in Docker containers on a VPS, accessible at
            {' '}
            <a href="https://portal.games-crunch.com/">https://portal.games-crunch.com/</a>
          </>,
        ]}
      />
      <EduExpItem
        name="AT&amp;T"
        title="Web Development Intern"
        from="July 2018"
        to="September 2018"
        items={[
          <>
            Development of tools used for monitoring internal processes and client-facing web
            applications for gathering information required for network configuration using MEAN
            stack
          </>,
        ]}
      />
    </article>
  ),
});

export default Experience;
