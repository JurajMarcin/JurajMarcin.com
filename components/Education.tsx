import React from 'react';
import section from './section';
import EduExpItem from './EduExpItem';

const Education = section({
  style: {
    color: 'var(--lighter-foreground)',
    background: 'var(--lighter-background)',
  },
  title: 'Education',
  children: (
    <article>
      <EduExpItem
        name="Faculty of Informatics, Masaryk University, Brno, Czech Republic"
        from="September 2019"
        to="present"
        href="https://www.fi.muni.cz/"
        items={[
          <>Ranks among 2% of the best students in the programme</>,
          <>
            Tutor of the cource
            {' '}
            <a href="https://is.muni.cz/course/fi/PB071/">Principles of low-level programming</a>
            {' '}
            (Introductory C course)
          </>,
          <>Faculty ambassador</>,
        ]}
      />
      <EduExpItem
        name="Gymnázium, Poštová 9, Košice, Slovakia"
        from="September 2015"
        to="May 2019"
        href="https://www.gympos.sk/"
        items={[
          <>Grammar school, graduated from Slovak, English, Math and Computer Science</>,
          <>
            Participation in the JA Company of the Year competition as Vice President for
            Production at the iontee, JA Company
          </>,
          <>
            Two times winner of the Land Rover 4x4 in Schools National Finale, 4th place in the
            World Finale, Awards for Best Verbal Presentation and Coding Challenge
          </>,
        ]}
      />
    </article>
  ),
});

export default Education;
