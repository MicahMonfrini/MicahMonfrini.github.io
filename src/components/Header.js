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
          <span className="linkHover">Home</span>
        </ActiveLink>
        <ActiveLink href="/about">
          <span className="linkHover">About</span>
        </ActiveLink>
        <ActiveLink href="/projects">
          <span className="linkHover">Projects</span>
        </ActiveLink>
        <ActiveLink href="/contact">
          <span className="linkHover">Contact</span>
        </ActiveLink>
      </nav>
    </div>
  );
}

export default Header;
