import React from 'react';
import ActiveLink from './ActiveLink.js';
import Head from 'next/head';

function Header() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="../static/css/Header.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100"/>
        <link rel="stylesheet" href="../static/css/font-awesome/css/font-awesome.min.css"/>
      </Head>
      <nav className="navbar">
        <ActiveLink href="/">
          Home
        </ActiveLink>
        <ActiveLink href="/about">
          About
        </ActiveLink>
        <ActiveLink href="/projects">
          Projects
        </ActiveLink>
        <ActiveLink href="/contact">
          Contact
        </ActiveLink>
      </nav>
    </div>
  );
}

export default Header;
