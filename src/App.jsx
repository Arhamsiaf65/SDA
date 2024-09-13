import React, { useEffect } from 'react';
import Lenis from 'lenis';


import NavBar from './components/navBar';
import Hero from './components/hero';
import Services from './components/services';
import HeroSection from './components/heroSection';
import Team from './components/team';
import Appointment from './components/appointment';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, 
      easing: (t) => t * (2 - t), 
      smoothWheel: true, 
      smoothTouch: true, 
      lerp: 0.2,
    });

    const handleScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => cancelAnimationFrame(handleScroll);
  }, []);

  return (
    <div className='relative'> 
      <NavBar />
      <Hero />
      <Services />
      <HeroSection />
      <Team />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;
