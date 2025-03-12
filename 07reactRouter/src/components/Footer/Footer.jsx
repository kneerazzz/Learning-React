import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li>
                                    <NavLink to="/" className={({isActive}) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-700"} cursor-pointer`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({isActive}) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-500"} cursor-pointer`}>About</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li>
                                    <NavLink to="/github" className={({isActive}) => `hover:underline ${isActive ? "text-orange-700" : "text-gray-700"} cursor-pointer`}>Github</NavLink>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline cursor-pointer">Discord</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-gray-900 font-semibold text-sm mb-6 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li>
                                    <Link to="/" className="hover:underline cursor-pointer">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline cursor-pointer">Terms &amp; Conditions </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center loading-relaxed mr-1">
                        © 2025
                        <a href="https://github.com/kneerazzz/Learning-React"> 
                            kneerazzz
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule = "evenrodd"
                                    d="M6.135 3H8V0H6.135A4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenrodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule = "evenrodd"
                                    d="M6.135 3H8V0H6.135A4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenrodd"
                                />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule = "evenrodd"
                                    d="M6.135 3H8V0H6.135A4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenrodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule = "evenrodd"
                                    d="M6.135 3H8V0H6.135A4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenrodd"
                                />
                            </svg>
                            <span className="sr-only">Github account</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="https://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule = "evenrodd"
                                    d="M6.135 3H8V0H6.135A4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenrodd"
                                />
                            </svg>
                            <span className="sr-only">Dribble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}