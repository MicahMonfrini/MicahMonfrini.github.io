import React from 'react';
import Link from 'next/link';
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
        <Link href="/">
          <a className="">Home</a>
        </Link>
        <Link href="/about">
          <a className="">About</a>
        </Link>
        <Link href="/projects">
          <a className="">Projects</a>
        </Link>
        <Link href="/contact">
          <a className="">Contact</a>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
