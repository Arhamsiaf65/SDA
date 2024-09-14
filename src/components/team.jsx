import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Team() {
    const [showDetail, setShowDetail] = useState(false);
    const [activeDoctor, setActiveDoctor] = useState(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const useAnimationInView = (threshold = 0.1) => {
        const [ref, inView] = useInView({
            threshold,
            triggerOnce: true,
        });
        return [ref, inView];
    };

    const doctors = [
        { name: "Dr. Sahir Ahmed", specialty: "Cardiologist", experience: "10 years" },
        { name: "Dr. Minal Ch", specialty: "Dermatologist", experience: "8 years" },
        { name: "Dr. Ayesha Saeed", specialty: "Pediatrician", experience: "12 years" },
        { name: "Dr. Omar Zafar", specialty: "Orthopedic Surgeon", experience: "15 years" },
        { name: "Dr. Bilal Shah", specialty: "Neurologist", experience: "9 years" },
        { name: "Dr. Maria Rashid", specialty: "General Physician", experience: "7 years" }
    ];

    const handleDoctorClick = (index) => {
        if (isMobile) {
            setActiveDoctor(index === activeDoctor ? null : index);
        }
    };

    return (
        <div 
            ref={sectionRef}>
            <section className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start md:mt-20">
                        <div
                            className="w-full lg:w-1/2 mb-12 lg:mb-0"

                        >
                            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                                Our Leading, Strong & Creative Team
                            </h2>
                            <p className="text-lg text-gray-500 md:mb-16 text-center lg:text-left">
                                Our dedicated medical team is committed to providing exceptional care tailored to your needs.
                                With expertise across a wide range of specialties, we deliver comprehensive medical services
                                right to your doorstep. Trust our skilled professionals to ensure your health and well-being with
                                personalized and compassionate care.
                            </p>
                            <button className="py-3 px-8 w-60 bg-[#177D6B] text-white text-base font-semibold transition-transform duration-500 hover:scale-105 block text-center rounded-full mx-auto lg:mx-0">
                                Join Our Team
                            </button>
                        </div>

                        <motion.div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                            {[
                                "https://pagedone.io/asset/uploads/1696238644.png",
                                "https://pagedone.io/asset/uploads/1696238665.png",
                                "https://pagedone.io/asset/uploads/1696238684.png",
                                "https://pagedone.io/asset/uploads/1696238702.png",
                                "https://pagedone.io/asset/uploads/1696238720.png",
                                "https://pagedone.io/asset/uploads/1696238737.png"
                            ].map((src, index) => {
                                const [ref, inView] = useAnimationInView();
                                const isActive = activeDoctor === index;
                                return (
                                    <motion.div
                                        key={index}
                                        ref={ref}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                                        onClick={() => handleDoctorClick(index)}
                                    >
                                        <img
                                            src={src}
                                            alt={doctors[index].name}
                                            className={`w-full h-56 rounded-2xl object-cover transform transition-transform duration-300 ${isActive || !isMobile ? 'hover:scale-105' : ''}`}
                                        />
                                        <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold ${isMobile && isActive ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>
                                            <div className="absolute bottom-8 text-center text-[#f6f3f3]">
                                                <p className='text-sm'>{doctors[index].name}</p>
                                                <p className='text-2xl'>{doctors[index].specialty}</p>
                                                <p className='text-sm font-thin'>{doctors[index].experience} experience</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;
