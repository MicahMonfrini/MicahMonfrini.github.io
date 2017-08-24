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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid reiciendis magni ipsa, est vitae iure laboriosam commodi eius
            suscipit sequi quod maiores dicta, ex, in quia nesciunt animi
            dolores voluptas.
          </p>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugit tempore unde voluptas suscipit dicta
            deserunt temporibus culpa molestias nesciunt nemo veritatis iure dolores
            labore assumenda quas reiciendis, sit consectetur porro tenetur commodi
            iusto perferendis quaerat libero. Quis veritatis ex aspernatur aperiam
            reprehenderit vero cum, neque distinctio beatae, ipsum tempore quibusdam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
