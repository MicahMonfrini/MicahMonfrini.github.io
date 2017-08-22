import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
      <h1>About</h1>
      <p className="testText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid reiciendis magni ipsa, est vitae iure laboriosam commodi eius
        suscipit sequi quod maiores dicta, ex, in quia nesciunt animi
        dolores voluptas.
      </p>
      <p className="testText" style={{marginTop: 100}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit tempore unde voluptas suscipit dicta deserunt temporibus culpa molestias nesciunt nemo veritatis iure dolores labore assumenda quas reiciendis, sit consectetur porro tenetur commodi iusto perferendis quaerat libero. Quis veritatis ex aspernatur aperiam reprehenderit vero cum, neque distinctio beatae, ipsum tempore quibusdam?</p>
    </div>
  );
}

export default AboutPage;
