import React from 'react';
import Services from './components/services.jsx';
import HeroSection from './components/heroSection.jsx';
import Team from './components/team.jsx';
import Appointment from './components/appointment.jsx';
import NavBar from './components/navBar';
import Hero from './components/hero';
import Footer from './components/footer.jsx'

function App() {
    return (
        <div>
            <NavBar />
            <section id="/">
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
