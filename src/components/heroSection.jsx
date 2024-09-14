import React from 'react';  
import styled from 'styled-components';
import TextAnimator from './textAnimator';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SanSarif = styled.div`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
`;


function HeroSection() {
    const heading = "Free Consultations";
    const text = "At Doctors Corner, we offer top-notch medical care tailored to your individual needs. Our expert team is here to provide everything from routine check-ups to advanced treatments. Discover how our personalized approach can help you achieve better health. Book a free consultation today and start your journey to wellness with us.";

    const { ref: sectionRef, inView: isVisible } = useInView({
        triggerOnce: true, // Set to true to trigger only once
        threshold: 0.1,    // Adjust this based on when you want to trigger the visibility
        rootMargin: '0px'  // Adjust the root margin if needed
    });

    return (
        <div ref={sectionRef} className='flex flex-col-reverse space-y-24 md:flex-row bg-[#177D6B] w-full min-h-[90vh] px-4 md:pt-0 md:px-16 relative'>
            <div className='flex-1 text-center md:text-start md:px-10 pb-10 md:pb-0'>
                <SanSarif className='text-white px-4 md:px-10 mt-8 md:mt-16'>
                    <div className='text-3xl md:text-4xl'>
                        <span className='font-extralight text-xl md:text-xl'>Exceptional</span>
                        <div className='flex flex-col relative'>
                            <span className='text-lg md:text-xl'>Approaches In</span>
                            <span className='text-4xl md:text-5xl'>
                                {isVisible && <TextAnimator text="Medical Care" trigger={isVisible} />}
                            </span>
                        </div>
                    </div>
                    <p className='py-4 md:py-5 md:text-base'>
                        {isVisible && <TextAnimator text={text} trigger={isVisible} />}
                    </p>
                    <button className='mx-auto mt-14 md:mt-10 text-white gap-3 items-center px-4 py-2 rounded-full border-2 border-white min-w-[120px] hover:text-green-800 hover:bg-white transition ease-in delay-200'>
                        Get Appointment
                    </button>
                </SanSarif>
            </div>

            <div className='flex-1 flex-col-reverse items-center justify-center relative ptmd:mt-24'>
                <img
                    src="/doctor.png"
                    alt="Doctor"
                    className='relative md:-bottom-3 md:right-20 scale-100 md:scale-125'
                />
                <motion.div
                    className='absolute -top-[3rem] md:top-20 w-[60%] md:w-[220px] bg-white p-4 rounded-lg shadow-lg text-[#177D6B]'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h3 className='font-bold mb-2 text-sm md:text-base'>{heading}</h3>
                    <p className='text-xs md:text-sm'>Schedule a free consultation today to discuss personalized treatment plans and start your path to wellness.</p>
                    <button className='mt-2 md:mt-3 bg-[#177D6B] text-white px-3 py-1 rounded-full text-xs md:text-sm'>
                        Learn More
                    </button>
                </motion.div>
            </div>

           
        </div>
    );
}

export default HeroSection;
