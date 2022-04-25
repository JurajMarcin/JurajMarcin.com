import React, {
  createRef, useCallback, useEffect, useMemo, useState,
} from 'react';
import type { NextPage } from 'next';
import Home from '../components/Home';
import NavContext, { NavSection } from '../store/NavContext';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Experience from '../components/Experience';

const Index: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', el);
    return () => window.removeEventListener('scroll', el);
  }, [setScrollY]);

  const [navSections] = useState<{ [hash: string]: NavSection }>({
    home: {
      name: 'Home',
      ref: createRef<HTMLDivElement>(),
      component: Home,
    },
    about: {
      name: 'About',
      ref: createRef<HTMLDivElement>(),
      component: About,
    },
    education: {
      name: 'Education',
      ref: createRef<HTMLDivElement>(),
      component: Education,
    },
    experience: {
      name: 'Experience',
      ref: createRef<HTMLDivElement>(),
      component: Experience,
    },
    contact: {
      name: 'Contact',
      ref: createRef<HTMLDivElement>(),
      component: Contact,
    },
  });

  const scrollToNavSection = useCallback((hash: string) => {
    navSections[hash]?.ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [navSections]);

  const navigate = useCallback((hash: string) => {
    scrollToNavSection(hash);
  }, [scrollToNavSection]);

  const [currentHash, setCurrentHash] = useState<string>((typeof window !== 'undefined' && window?.location.hash.substring(1)) || 'home');

  useEffect(() => {
    window.location.hash = `#${currentHash}`;
  }, [currentHash]);

  useEffect(() => {
    scrollToNavSection(currentHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToNavSection]);

  useEffect(() => {
    setCurrentHash(Object.entries(navSections)
      .find(([, { ref }]) => scrollY <= (ref.current?.offsetTop || 0) + window.innerHeight / 2)
      ?.[0] || 'invalid');
  }, [setCurrentHash, navSections, scrollY]);

  const navContextValue = useMemo(
    () => ({ hash: currentHash, navigate }),
    [currentHash, navigate],
  );

  return (
    <NavContext.Provider value={navContextValue}>
      <Header />
      <Navigation scrollY={scrollY} navSections={navSections} />
      {Object.entries(navSections)
        .map(([hash, { component, ref }]) => component({ ref, key: hash }))}
      <Footer />
    </NavContext.Provider>
  );
};

export default Index;
