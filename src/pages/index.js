import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function IndexPage() {
  return (
    <div className="landing">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="../static/css/landing.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100"/>
        <link rel="stylesheet" href="../static/css/font-awesome/css/font-awesome.min.css"/>
        <title>Micah Monfrini</title>
      </Head>
      <h1 className="header">
        Micah Monfrini
      </h1>
      <p className="headerTitles">
        UI/UX Designer <span className ="divider">//</span> Front-End Developer
      </p>
      <nav>
        <Link href="/about">
          <a className="navButton">About</a>
        </Link>
        <Link href="/projects">
          <a className="navButton">Projects</a>
        </Link>
        <Link href="/contact">
          <a className="navButton">Contact</a>
        </Link>
      </nav>
      <div>
        <a href="#" className="fa fa-3x fa-twitter-square icon" aria-hidden="true"></a>
        <a href="#" className="fa fa-3x fa-linkedin-square icon" aria-hidden="true"></a>
        <a href="#" className="fa fa-3x fa-github-square icon" aria-hidden="true"></a>
      </div>
    </div>
  );
}

export default IndexPage;
