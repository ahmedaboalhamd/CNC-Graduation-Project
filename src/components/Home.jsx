import React from 'react';
import Hero from './Hero';
import About from './About';
import ComponentsSection from './ComponentsSection';
import Team from './Team';
import Supervisor from './Supervisor';
import Gallery from './Gallery';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ComponentsSection />
      <Supervisor />
      <Team />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
