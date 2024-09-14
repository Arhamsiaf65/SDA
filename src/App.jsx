import React, { useEffect } from 'react';
import Services from './components/services.jsx';
import HeroSection from './components/heroSection.jsx';
import Team from './components/team.jsx';
import Appointment from './components/appointment.jsx';
import NavBar from './components/navBar';
import Hero from './components/hero';
import Footer from './components/footer.jsx';
import Lenis from '@studio-freight/lenis';

function App() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2, // Duration of the scrolling animation in seconds
            easing: (t) => t, // Easing function
            smoothWheel: true, // Smooth scroll on mouse wheel
            smoothTouch: true, // Smooth scroll on touch devices
        });

        // Create a function to update Lenis on each frame
        function onFrame(time) {
            lenis.raf(time);
            requestAnimationFrame(onFrame);
        }

        // Start the animation frame loop
        requestAnimationFrame(onFrame);

        // Cleanup function to destroy Lenis when component unmounts
        return () => lenis.destroy();
    }, []);

    return (
        <div>
            <NavBar />
            <section id="home">
                <Hero />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="consultation">
                <HeroSection />
            </section>
            <section id="team">
                <Team />
            </section>
            <section id="book-appointment">
                <Appointment />
            </section>
            <Footer />
        </div>
    );
}

export default App;
