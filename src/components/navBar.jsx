import React from 'react';
import styled from 'styled-components';

const SanSarif = styled.div`
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
`;

function NavBar() {
    return (
        <SanSarif className="absolute top-0 left-0 w-full  z-10 p-4">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0">
                {/* Logo */}
                <img src="/logo.png" className="w-[8rem] h-[3.4rem] scale-150  object-cover" alt="Flowbite Logo" />

                {/* Buttons */}
                <div className="flex md:order-2 space-x-3">
                    <button
                        type="button"
                        className="hidden md:block text-[#03A398] hover:text-white border border-[#03A398] hover:bg-[#03A398] focus:ring-4 focus:outline-none focus:ring-[#03A398] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-colors duration-300 ease-in-out"
                    >
                        Free Consultation
                    </button>

                    {/* Mobile menu button */}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
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
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-2 md:p-0 mt-2 font-medium border border-gray-100 rounded-lg bg-white md:space-x-6 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-2 text-lg font-bold text-white hover:text-[#076e6d] rounded transition-all  hover:scale-105   md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-2 font-bold text-lg text-white hover:text-[#076e6d] rounded transition-all  hover:scale-105   md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-2 font-bold text-lg text-white hover:text-[#076e6d] rounded transition-all  hover:scale-105   md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Appointments
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-2 font-bold text-lg text-white hover:text-[#076e6d] rounded transition-all  hover:scale-105   md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-2 font-bold text-lg text-white hover:text-[#076e6d] rounded transition-all  hover:scale-105   md:bg-transparent md:p-0 duration-300 ease-in-out transform"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </SanSarif>
    );
}

export default NavBar;
