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
          <a className="navButton">Home</a>
        </ActiveLink>
        <ActiveLink href="/about">
          <a className="navButton">About</a>
        </ActiveLink>
        <ActiveLink href="/projects">
          <a className="navButton">Projects</a>
        </ActiveLink>
        <ActiveLink href="/contact">
          <a className="navButton">Contact</a>
        </ActiveLink>
      </nav>
    </div>
  );
}

export default Header;
