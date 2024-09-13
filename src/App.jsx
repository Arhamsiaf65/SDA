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
      duration: 1.5, // Duration of the scroll animation
      easing: (t) => t * (2 - t), // Easing function
      smoothWheel: true, // Smooth scrolling for mouse wheel
      smoothTouch: true, // Smooth scrolling for touch devices
      lerp: 0.2, // Interpolation factor for smooth scrolling
    });

    // Handle scroll animation
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
