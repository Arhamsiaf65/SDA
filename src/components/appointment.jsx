import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Appointment() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className='flex flex-col md:flex-row mx-4 md:mx-16 md:my-32 my-10'
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className='flex-[1] flex items-center justify-center mb-8 md:mb-0'>
        <img className='w-full h-auto rounded-lg shadow-lg' src="/booking.jpg" alt="Booking" />
      </div>

      <div className='flex-[1] mx-4 md:mx-8 mt-6 md:mt-0 rounded-lg bg-white p-6 md:p-8 shadow-lg'>
        <div className='text-center text-2xl md:text-3xl font-bold mb-6'>Make an Appointment</div>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row gap-6'>
              <input
                type="text"
                name="name"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Full Name *"
              />
              <input
                type="email"
                name="email"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Email *"
              />
            </div>
            <div className='flex flex-col md:flex-row gap-6'>
              <select
                name="select"
                id="select"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              >
                <option className="text-gray-500">Please Select</option>
              </select>
              <select
                name="select"
                id="select"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              >
                <option className="text-gray-500">4:00 Available</option>
              </select>
            </div>
            <textarea
              name="textarea"
              id="text"
              cols="30"
              rows="4"
              className="w-full resize-none rounded-md border border-gray-300 p-4 text-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Message"
            />
            <div className='text-center'>
              <button
                type="submit"
                className="rounded-lg bg-[#177D6B] px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Appointment;
