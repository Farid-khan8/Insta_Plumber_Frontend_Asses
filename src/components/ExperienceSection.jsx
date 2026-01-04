// import { Clock, DollarSign, Zap } from "lucide-react";
// import experienceImage from "../assets/experience.png";
// import available from "../assets/available247.svg";
// import response from "../assets/response.svg";
// import pricing from "../assets/TransparentPricing.svg";

// function ExperienceSection() {
//     return (
//         <section className="bg-white py-20">
//             <div className="max-w-6xl mx-auto px-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                     {/* LEFT IMAGE */}
//                     <div className="relative">
//                         <img
//                             src={experienceImage}
//                             alt="Experienced plumber"
//                             className="w-full max-w-[420px] rounded-3xl object-cover"
//                         />
//                     </div>

//                     {/* RIGHT CONTENT */}
//                     <div className="max-w-lg">
//                         {/* Pill */}
//                         <span className="inline-block mb-3 px-4 py-1 border border-gray-300 rounded-full text-xs tracking-wider text-gray-600">
//                             OUR EXPERIENCE
//                         </span>

//                         {/* Heading */}
//                         <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-snug">
//                             Why Customers Love <br /> InstaPlumbers
//                         </h2>

//                         {/* Description */}
//                         <p className="mt-4 text-gray-600 text-sm leading-relaxed">
//                             We’re built around speed, transparency, and trust—
//                             here’s why thousands of Londoners choose us:
//                         </p>

//                         {/* Features */}
//                         <div className="mt-6 space-y-5">
//                             <div className="mt-8 space-y-6">
//                                 <Feature
//                                     icon={available}
//                                     title="Available 24/7"
//                                     text="Plumbing emergencies don’t wait, and neither do we."
//                                 />
//                                 <Feature
//                                     icon={pricing}
//                                     title="Up-Front, Transparent Pricing"
//                                     text="No guesswork. No hidden fees."
//                                 />
//                                 <Feature
//                                     icon={response}
//                                     title="Immediate Response"
//                                     text="Book in seconds, get matched with a nearby plumber."
//                                 />
//                             </div>
//                         </div>

//                         {/* CTA */}
//                         <button className="mt-10 bg-[#0B1F3A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#102a4a] transition">
//                             Book Your Plumber Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* Feature Item */
// function Feature({ icon, title, text }) {
//     return (
//         <div className="flex items-start gap-4">
//             <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                 <img src={icon} alt={title} className="w-6 h-6" />
//             </div>
//             <div>
//                 <h4 className="font-semibold text-[#0B1F3A]">{title}</h4>
//                 <p className="text-gray-600 text-sm mt-1">{text}</p>
//             </div>
//         </div>
//     );
// }

// export default ExperienceSection;

import experienceImage from "../assets/experience.png";
import available from "../assets/available247.svg";
import response from "../assets/response.svg";
import pricing from "../assets/TransparentPricing.svg";

function WhyCustomersLove() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                    {/* LEFT IMAGE */}
                    <div className="relative max-w-md mx-auto lg:mx-0">
                        <img
                            src={experienceImage}
                            alt="Experienced plumber at work"
                            className="w-full rounded-3xl object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT (SMALLER & COMPACT) */}
                    <div className="max-w-lg">
                        {/* Pill */}
                        <span className="inline-block mb-3 px-4 py-1 border border-gray-300 rounded-full text-xs tracking-wide text-gray-600">
                            OUR EXPERIENCE
                        </span>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] leading-snug">
                            Why Customers Love <br />
                            InstaPlumbers
                        </h2>

                        {/* Description */}
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                            We’re built around speed, transparency, and
                            trust—here’s why thousands of Londoners choose us:
                        </p>

                        {/* Features */}
                        <div className="mt-6 space-y-5">
                            {/* Feature 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                    <img
                                        src={available}
                                        alt="24/7 availability"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#0B1F3A] text-sm">
                                        Available 24/7
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Plumbing emergencies don’t wait, and
                                        neither do we.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                    <img
                                        src={pricing}
                                        alt="Transparent pricing"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#0B1F3A] text-sm">
                                        Up-Front, Transparent Pricing
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        No guesswork. No hidden fees.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                                    <img
                                        src={response}
                                        alt="Immediate response"
                                        className="w-5 h-5"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[#0B1F3A] text-sm">
                                        Immediate Response
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        Book in seconds, get matched instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button (Smaller) */}
                        <button className="mt-7 bg-[#0B1F3A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#092040] transition">
                            Book Your Plumber Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyCustomersLove;
