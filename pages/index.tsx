import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Workexperience from '../components/Workexperience';

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap=mandatory overflow-scroll
    z-0'>
      <Head>
        <title>zikai's Portfolio</title>

      </Head>
      <h1 className="text-blue-800">
      Hello world!
      </h1>

      {/* Heder */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />

      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experence */}
      <section id='experience' className='snap-center'>
        <Workexperience />
      </section>
      {/* Skills */}

      {/* Projects */}

      {/* Contace Me*/}


    </div>
  );
};

export default Home;
