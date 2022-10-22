import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>zikai's Portfolio</title>

      </Head>
      <h1 className="text-blue-800">
      Hello world!
      </h1>

      {/* Heder */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />

      </section>
      {/* About */}

      {/* Experence */}

      {/* Skills */}

      {/* Projects */}

      {/* Contace Me*/}


    </div>
  );
};

export default Home;
