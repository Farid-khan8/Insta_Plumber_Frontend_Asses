import { MapPin, Phone } from "lucide-react";
import logo2 from "../assets/logo2.svg";

import facebook from "../assets/fb.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.png";
import xtwitter from "../assets/x.svg";

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#071A33] to-[#041427] text-gray-300">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 text-white text-2xl font-bold">
                            <img
                                src={logo2}
                                alt="Plumber Logo"
                                className="w-15 h-15"
                            />
                        </div>

                        <p className="mt-6 text-sm leading-relaxed text-gray-400 max-w-sm">
                            Created with <span className="text-red-500">♥</span>{" "}
                            in London <br />
                            Registered in England & Wales <br />
                            Company No. 99988877 <br />
                            ICO Registration No. AB9876543 <br />
                            ISO27001 Compliant
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 mt-6 text-white">
                            <img
                                src={facebook}
                                alt="Facebook"
                                className="w-5 h-5"
                            />
                            <img
                                src={youtube}
                                alt="YouTube"
                                className="w-5 h-5"
                            />
                            <img
                                src={twitter}
                                alt="Twitter"
                                className="w-5 h-5"
                            />
                            <img
                                src={xtwitter}
                                alt="X Twitter"
                                className="w-5 h-5"
                            />
                        </div>
                    </div>

                    {/* Right CTA & Links */}
                    <div className="lg:col-span-8">
                        {/* CTA */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div>
                                <h3 className="text-white text-3xl font-bold whitespace-nowrap">
                                    Need a Plumber Right Now?
                                </h3>
                                <p className="mt-2 text-gray-400 max-w-xl text-sm">
                                    We’ve got professionals on-call 24/7 across
                                    London. Get fast, affordable plumbing help
                                    today.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 whitespace-nowrap">
                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#041427] transition">
                                    <MapPin size={18} />
                                    Find a Plumber Near Me
                                </button>

                                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#041427] font-semibold hover:bg-gray-200 transition">
                                    <Phone size={18} />
                                    0800-123-4567
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-700 my-10" />

                        {/* Links */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            {/* Useful Links */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">
                                    Useful Link
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Home</li>
                                    <li>How It Works</li>
                                    <li>Services</li>
                                    <li>Pricing</li>
                                    <li>FAQs</li>
                                    <li>Contact</li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">
                                    Legal Links
                                </h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>Privacy & Cookie Policy</li>
                                    <li>Terms & Conditions</li>
                                    <li>Service Terms & Conditions</li>
                                    <li>Complaints Policy</li>
                                    <li>Other Policy</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">
                                    Contact
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    334 Stamford Street <br />
                                    London, SE1 9NQ, UK
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                © MyCompany Name Ltd. All Rights Reserved.
            </div>

            {/* Decorative Curve  */}
            <div className="absolute left-0 bottom-0 w-full h-full pointer-events-none opacity-20">
                <svg
                    className="absolute bottom-0 left-0"
                    width="600"
                    height="400"
                    viewBox="0 0 600 400"
                    fill="none"
                >
                    <path
                        d="M0 300 C150 250 300 350 600 200"
                        stroke="#ffffff"
                        strokeWidth="1"
                    />
                </svg>
            </div>
        </footer>
    );
}

export default Footer;
