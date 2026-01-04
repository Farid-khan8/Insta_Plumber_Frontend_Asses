import { useState } from "react";
import logo from "../assets/logo1.svg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* NAV BAR */}
                <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20">
                    {/* LEFT — LOGO */}
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="InstaPlumbers Logo"
                            className="h-8 cursor-pointer"
                        />
                    </div>

                    {/* CENTER — MENU (DESKTOP ONLY) */}
                    <nav className="hidden md:flex justify-center gap-8 whitespace-nowrap cursor-pointer">
                        <a className="text-gray-700 hover:text-blue-600 ">
                            Home
                        </a>
                        <a className="text-gray-700 hover:text-blue-600">
                            How It Works
                        </a>
                        <a className="text-gray-700 hover:text-blue-600">
                            Services
                        </a>
                        <a className="text-gray-700 hover:text-blue-600">
                            FAQs
                        </a>
                        <a className="text-gray-700 hover:text-blue-600">
                            Contact
                        </a>
                    </nav>

                    {/* RIGHT — CTA / HAMBURGER */}
                    <div className="flex justify-end items-center">
                        {/* Desktop CTA */}
                        <button className="hidden md:block px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-xl font-medium ">
                            Contact Us
                        </button>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="md:hidden py-6 space-y-4 bg-white">
                        <a className="block text-gray-700">Home</a>
                        <a className="block text-gray-700">How It Works</a>
                        <a className="block text-gray-700">Services</a>
                        <a className="block text-gray-700">FAQs</a>
                        <a className="block text-gray-700">Contact</a>

                        <button className="w-full mt-4 border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-medium">
                            Contact Us
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
