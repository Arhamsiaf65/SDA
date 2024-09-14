import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Services from './components/services.jsx';
import HeroSection from './components/heroSection.jsx';
import Team from './components/team.jsx';
import Appointment from './components/appointment.jsx';
import './index.css';

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="services" element={<Services />} />
        <Route path="consultation" element={<HeroSection />} />
        <Route path="team" element={<Team />} />
        <Route path="book-appointment" element={<Appointment />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
