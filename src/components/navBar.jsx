import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

const SanSarif = styled.div`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
`;

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <SanSarif className="absolute top-0 left-0 w-full z-10 p-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <img src="/logo.png" className="w-[8rem] h-[3.4rem] scale-150 object-cover" alt="Logo" />

                <div className="flex md:order-2 space-x-3">
                    <button
                        type="button"
                        className="hidden md:block text-[#03A398] hover:text-white border border-[#03A398] hover:bg-[#03A398] focus:ring-4 focus:outline-none focus:ring-[#03A398] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 ease-in-out"
                    >
                        Free Consultation
                    </button>

                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    ref={menuRef}
                    className={`fixed top-0 left-0 right-0 bg-white z-50 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex md:flex-row md:bg-transparent md:w-auto md:space-x-6`}
                    id="navbar-sticky"
                >
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="absolute top-2 right-4 inline-flex items-center p-2 z-50 justify-center text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Close menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l12 12M13 1L1 13"
                            />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center md:flex-row md:space-x-6 w-full md:w-auto"
                    onClick={() => setIsOpen(false)}>
                        <li className="md:my-0 my-2 mt-12">
                            <ScrollLink
                                to="home"
                                onClick={() => setIsOpen(false)}
                                smooth={true}
                                duration={1000}
                                className="block py-2 px-4 text-lg font-bold text-gray-800 md:text-white hover:text-[#076e6d] rounded transition-transform hover:scale-105 md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Home
                            </ScrollLink>
                        </li>
                        <li className="md:my-0 my-2">
                            <ScrollLink
                                to="services"
                                onClick={() => setIsOpen(false)}
                                smooth={true}
                                duration={1000}
                                className="block py-2 px-4 text-lg font-bold text-gray-800 md:text-white hover:text-[#076e6d] rounded transition-transform hover:scale-105 md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Services
                            </ScrollLink>
                        </li>
                        <li className="md:my-0 my-2">
                            <ScrollLink
                                to="consultation"
                                onClick={() => setIsOpen(false)}
                                smooth={true}
                                duration={1000}
                                className="block py-2 px-4 text-lg font-bold text-gray-800 md:text-white hover:text-[#076e6d] rounded transition-transform hover:scale-105 md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Consultation
                            </ScrollLink>
                        </li>
                        <li className="md:my-0 my-2">
                            <ScrollLink
                                to="team"
                                onClick={() => setIsOpen(false)}
                                smooth={true}
                                duration={1000}
                                className="block py-2 px-4 text-lg font-bold text-gray-800 md:text-white hover:text-[#076e6d] rounded transition-transform hover:scale-105 md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Team
                            </ScrollLink>
                        </li>
                        <li className="md:my-0 my-2">
                            <ScrollLink
                                to="book-appointment"
                                onClick={() => setIsOpen(false)}
                                smooth={true}
                                duration={1500}
                                className="block py-2 px-4 text-lg font-bold text-gray-800 md:text-white hover:text-[#076e6d] rounded transition-transform hover:scale-105 md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Appointment
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>
        </SanSarif>
    );
}

export default NavBar;
