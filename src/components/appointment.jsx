import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appointment() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Appointment booked successfully!', {
      position: "top-right",
      autoClose: 2000, // Duration in milliseconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: "bounce",
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        transition="bounce"
      />
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
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col md:flex-row gap-6'>
                <input
                  type="text"
                  name="name"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Full Name *"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Email *"
                  required
                />
              </div>
              <div className='flex flex-col md:flex-row gap-6'>
                <select
                  name="appointmentType"
                  id="appointmentType"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  required
                >
                  <option value="">Please select</option>
                  <option value="consultation">Consultation</option>
                  <option value="checkup">Checkup</option>
                  <option value="followup">Follow-up</option>
                </select>
                <select
                  name="timeSlot"
                  id="timeSlot"
                  className="block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  required
                >
                  <option value="">Select time slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="02:00">02:00 PM</option>
                  <option value="03:00">03:00 PM</option>
                </select>
              </div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                className="w-full resize-none rounded-md border border-gray-300 p-4 text-gray-600 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Message"
              />
              <div className='text-center'>
                <button
                  type="submit"
                  className="rounded-lg bg-[#177D6B] px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#177D6B] focus:outline-none focus:ring-2 focus:ring-[#177D6B] focus:ring-opacity-50"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Appointment;
