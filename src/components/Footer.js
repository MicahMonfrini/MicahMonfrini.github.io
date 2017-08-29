import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Footer() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="../static/css/Footer.css"/>
        <link rel="stylesheet" href="../static/css/font-awesome/css/font-awesome.min.css"/>
      </Head>
      <div className="socialNav">
        <a
          href="https://twitter.com/zambonichaos"
          className="fa fa-2x fa-twitter icon"
          aria-hidden="true"
          target="_blank"
          rel="noopener noreferrer">
        </a>
        <a
          href="https://www.linkedin.com/in/mmonfrini/"
          className="fa fa-2x fa-linkedin icon"
          aria-hidden="true"
          target="_blank"
          rel="noopener noreferrer">
        </a>
        <a
          href="https://github.com/MicahMonfrini"
          className="fa fa-2x fa-github icon"
          aria-hidden="true"
          target="_blank"
          rel="noopener noreferrer">
        </a>
        <a
          href="https://medium.com/@zambonichaos"
          className="fa fa-2x fa-medium icon"
          aria-hidden="true"
          target="_blank"
          rel="noopener noreferrer">
        </a>
      </div>
    </div>
  );
}

export default Footer;
