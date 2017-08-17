import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function IndexPage() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="/static/landing.css"/>
        <title>Micah Monfrini</title>
      </Head>
      <h1 className="header">
        Micah Monfrini
      </h1>
      <p className="headerText">
        UI/UX Developer --- Front-End Developer
      </p>
      <Link href="/about" className="navButton">
        About
      </Link>
      <Link href="/projects" className="navButton">
        Projects
      </Link>
      <Link href="/contact" className="navButton">
        Contact
      </Link>
      <div className="socialNav">
        icons go here
      </div>
    </div>
  );
}

export default IndexPage;
