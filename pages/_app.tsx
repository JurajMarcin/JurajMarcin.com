import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* META */}
      <title>Juraj Marcin - Programmer \ Web Developer \ Hobbyist Photographer</title>
      <meta name="description" content="I'm a university student interested in programming, web development, microcontrollers and photography." />
      <meta name="author" content="Juraj Marcin" />
      <meta name="keywords" content="programmer, programming, software engineer, application, software, web, website, web development, web developer, game, game developer, arduino, atmega, microcontroller, iot, mobile, android, app, app development, photographer, photography, photo" />
      <Script type="application/ld+json">
        {'{ "@context": "http://schema.org", "@type": "Person", "email": "mailto:juraj@jurajmarcin.com", "name": "Juraj Marcin", url: "https://jurajmarcin.com", }'}
      </Script>
      {/* OPENGRAPH */}
      <meta property="og:url" content="https://jurajmarcin.com/" />
      <meta property="og:title" content="Juraj Marcin - Programmer \ Web developer \ Hobbyist Photographer" />
      <meta property="og:description" content="I'm a university student interested in programming, web development, microcontrollers and photography." />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content="https://jurajmarcin.com/assets/cover.png" />
      {/* TWITTER */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Juraj Marcin - Programmer \ Web developer \ Hobbyist Photographer" />
      <meta name="twitter:description" content="I'm a university student interested in programming, web development, microcontrollers and photography." />
      <meta name="twitter:image" content="https://jurajmarcin.com/assets/cover.png" />
    </Head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </>
);

export default MyApp;
