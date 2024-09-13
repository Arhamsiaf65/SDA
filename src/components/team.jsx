import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Team() {
    const [showDetail, setShowDetail] = useState(false);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

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

    // Custom hook to use Intersection Observer
    const useAnimationInView = (threshold = 0.1) => {
        const [ref, inView] = useInView({
            threshold,
            triggerOnce: true,
        });
        return [ref, inView];
    };

    return (
        <div ref={sectionRef}>
            <section className="py-24 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ x: -50, y: -70, opacity: 0 }} 
                            animate={{ x: isVisible ? 0 : -50, y: isVisible ? 0 : -30, opacity: isVisible ? 1 : 0 }} 
                            transition={{ duration: 1.2, ease: 'easeOut' }} 
                        >
                            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                                Our leading, strong & creative team
                            </h2>
                            <p className="text-lg text-gray-500 md:mb-16 text-center lg:text-left">
                                Our dedicated medical team is committed to providing exceptional care tailored to your needs.
                                With expertise across a wide range of specialties, we deliver comprehensive medical services
                                right to your doorstep. Trust our skilled professionals to ensure your health and well-being with
                                personalized and compassionate care.
                            </p>
                            <button className="cursor-pointer py-3 px-8 w-60 bg-[#177D6B] text-white text-base font-semibold transition-all duration-500 block text-center rounded-full mx-auto lg:mx-0 m-10 md:mb-0">
                                Join our team
                            </button>
                        </motion.div>

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
                                return (
                                    <motion.div
                                        key={index}
                                        ref={ref}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                        className="relative overflow-hidden rounded-2xl"
                                    >
                                        <img
                                            src={src}
                                            alt={`Team image ${index + 1}`}
                                            className="w-44 h-56 rounded-2xl object-cover transform transition-transform duration-300 hover:scale-110 mx-auto"
                                        />
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
