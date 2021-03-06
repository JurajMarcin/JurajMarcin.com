import React from 'react';
import section from './section';
import Skill from './Skill';
import SkillList from './SkillList';

import styles from '../styles/About.module.css';

const About = section({
  style: {
    color: 'var(--accent-foreground-text)',
    backgroundColor: 'var(--accent-color)',
  },
  title: 'About Me',
  titleClassName: styles.title,
  children: (
    <article>
      <p>
        I am a university student interested in programming, web development and photography.
      </p>
      <p>
        I started at a young age as self-taught technology and programming enthusiast who tested
        his skills at multiple school competitions and personal projects.
      </p>
      <p>
        Now I continue to broaden my skills by doing more projects for myself and occasional
        clients. I also work as a programming tutor at the university I am attending.
      </p>
      <SkillList>
        <Skill title="Languages">
          C, C#, Python, HTML, CSS, JavaScript, TypeScript, PHP, Bash, Haskell, Perl, Java
        </Skill>
        <Skill title="Frameworks & Libraries">React, Angular, Next.js, ASP.NET, Blazor, Laravel, Node.js, Express, Prisma, Bootstrap</Skill>
        <Skill title="Tools & Others">Git, Linux, Docker, Arduino/ATmega, simple PCB design, LaTeX</Skill>
      </SkillList>
    </article>
  ),
});

export default About;
