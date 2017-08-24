import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header.js';

function AboutPage() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <link rel="stylesheet" href="../static/css/about.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100"/>
        <link rel="stylesheet" href="../static/css/font-awesome/css/font-awesome.min.css"/>
        <title>About</title>
      </Head>
      <Header />
      <div className="bio">
        <div className="bioImg">
          <img src="http://lorempixel.com/output/cats-q-c-507-480-5.jpg"/>
        </div>
        <div className="bioText">
          <p>
            Cat ipsum dolor sit amet. Sit in window and stare oooh, a bird, yum mewl for food at 4am scratch
            me there, elevator butt milk the cow and licks paws hate dog.
          </p>
          <br />
          <p>
            Stand in front of the computer screen chase
            imaginary bugs. I just saw other cats inside the house and nobody ask me
            before using my litter box play riveting piece on synthesizer keyboard
            but scratch at fleas, meow until belly rubs, hide behind curtain when
            vacuum cleaner is on scratch strangers and poo on owners food, sleep on keyboard.
            Groom yourself 4 hours - checked, have your beauty sleep 18 hours
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
