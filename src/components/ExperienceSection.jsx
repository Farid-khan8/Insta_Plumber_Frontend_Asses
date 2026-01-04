import experienceImage from "../assets/experience.png";
// import available from "../assets/available247.svg";
import availableIcon from "../assets/available247_icon.svg";
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
                                        src={availableIcon}
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
