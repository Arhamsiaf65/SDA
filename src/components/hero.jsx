import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInfoCircle } from 'react-icons/fa';

const SanSarif = styled.div`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
`;

const PopupContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 50;
`;

const Popup = styled(motion.div)`
  background-color: white;
  color: black;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const InfoIcon = styled(FaInfoCircle)`
  position: absolute;
  bottom: 90px;
  left: 0px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  background: white;
  border-radius: 50%; 
  transition: color 0.3s ease;
  &:hover {
    color: #00B4A1;
  }
`;

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2024/07/08/16/28/ai-generated-8881542_1280.jpg",
    alt: "Medical Consultation",
    text: "Expert Medical Consultation",
    subtitle: "Receive personalized medical care and expert advice tailored to your specific needs.",
    buttonText1: "Learn More",
    buttonText2: "Contact Us"
  },
  {
    src: "https://img.freepik.com/premium-photo/innovations-healthcare-catering-needs-adults-groups_1214173-42630.jpg?w=826",
    alt: "Advanced Technology",
    text: "State-of-the-Art Technology",
    subtitle: "Discover our advanced medical equipment designed to provide the highest level of care and precision.",
    buttonText1: "Our Technology",
    buttonText2: "Request a Demo"
  },
  {
    src: "https://img.freepik.com/free-photo/male-assistant-taking-notes-clipboard-while-female-doctor-is-talking-with-senior-woman-nursing-home_482257-20698.jpg?ga=GA1.2.1197899062.1726095420&semt=ais_hybrid",
    alt: "Caring Staff",
    text: "Compassionate Care",
    subtitle: "Meet our highly trained and compassionate staff dedicated to providing exceptional care and support for every patient.",
    buttonText1: "Meet the Team",
    buttonText2: "Get in Touch"
  }
];

const popups = [
  {
    message: "Special Offer: Get a free health checkup with your first consultation!",
    buttonText: "Claim Offer",
    link: "/offer"
  },
  {
    message: "Tip of the Day: Stay hydrated for better health!",
    buttonText: "Learn More",
    link: "/health-tips"
  },
  {
    message: "New Service: Online consultations are now available!",
    buttonText: "Book Now",
    link: "/online-consultation"
  }
];

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popup, setPopup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const randomPopupInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * popups.length);
      setPopup(popups[randomIndex]);
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 5000);
    }, 5000);

    return () => clearInterval(randomPopupInterval);
  }, [showPopup]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

 

  return (
    <SanSarif className="relative w-full h-[100vh] overflow-hidden">
      <img
        src={images[currentIndex].src}
        className="absolute inset-0 w-full h-full object-cover"
        alt={images[currentIndex].alt}
      />
      <motion.div
        ref={ref}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-6 text-center"
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-2 transition-transform duration-500 transform hover:scale-105">
          {images[currentIndex].text}
        </h1>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-4 mx-4 md:mx-10 lg:mx-20 transition-opacity duration-500">
          {images[currentIndex].subtitle}
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          <button className="bg-gradient-to-r from-[#098487] to-[#00B4A1] text-white text-sm md:text-lg font-semibold border-2 border-transparent rounded-full px-6 md:px-8 py-2 md:py-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-[#e9fcfc] hover:border-[#098487] hover:shadow-xl">
            {images[currentIndex].buttonText1}
          </button>
          <button className="bg-white text-[#098487] text-sm md:text-lg font-semibold border-2 border-[#098487] rounded-full px-6 md:px-8 py-2 md:py-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#098487] hover:text-white hover:shadow-xl">
            {images[currentIndex].buttonText2}
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-5 right-5 flex space-x-7">
        <button onClick={handlePrev} className="text-white text-lg md:text-xl lg:text-2xl shadow-md transition-transform transform hover:scale-105">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={handleNext} className="text-white text-lg md:text-xl lg:text-2xl shadow-md transition-transform transform hover:scale-105">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <PopupContainer>
        {showPopup && popup && (
          <Popup
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <p className="mb-2 font-bold">{popup.message}</p>
            <a href={popup.link} className="text-[#098487] font-semibold underline">
              {popup.buttonText}
            </a>
          </Popup>
        )}
      </PopupContainer>

      
    </SanSarif>
  );
}

export default Hero;
