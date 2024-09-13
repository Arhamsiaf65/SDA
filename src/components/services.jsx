import React from 'react';
import ServiceCard from './serviceCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { faStethoscope, faTabletAlt, faHeartbeat, faHome } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    return (
        <motion.div
            ref={ref}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
        >
            <div className='flex flex-col md:flex-row justify-center   md:justify-around p-6 md:p-12 lg:p-24'>
                <h1 className='text-xl  mt-20 md:mt-0 md:text-3xl lg:text-4xl font-bold text-start md:text-center  mb-4 md:mb-0'>
                    Serving Your Health Is Our Priority
                </h1>
                <p className='text-sm mx-2 md:text-base lg:text-lg text-justify w-full md:w-80 lg:w-96'>
                    Services for medical, non-medical, and other health needs delivered to your home by our professional and trained doctors.
                </p>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 md:px-24 py-10'>
                <ServiceCard
                    icon={faStethoscope}
                    title='General Checkups'
                    description='Routine checkups and preventive care from our expert doctors.'
                />
                <ServiceCard
                    icon={faTabletAlt}
                    title='Telemedicine'
                    description='Connect with specialists remotely through our secure platform.'
                />
                <ServiceCard
                    icon={faHeartbeat}
                    title='Emergency Care'
                    description='24/7 emergency services at your doorstep, anytime, anywhere.'
                />
                <ServiceCard
                    icon={faHome}
                    title='Home Health Services'
                    description='Professional healthcare delivered at your home for convenience.'
                />
            </div>
        </motion.div>
    );
}

export default Services;
