import sarahImg from "../assets/client1.png";
import arnoldImg from "../assets/client2.png";

import chasLogo from "../assets/image1.png";
import gasSafeLogo from "../assets/image2.png";
import safeContractorLogo from "../assets/image3.png";
import niceicLogo from "../assets/image4.png";

function Testimonials() {
    const testimonials = [
        {
            quote: "Was here in under 15 minutes to fix my leak at midnight!",
            name: "Sarah, Shoreditch",
            role: "CLIENT, UK",
            image: sarahImg,
        },
        {
            quote: "I booked online and my boiler was repaired in an hour. Impressive response time!",
            name: "Arnold Wilson",
            role: "CLIENT, UK",
            image: arnoldImg,
        },
    ];

    const logos = [
        niceicLogo,
        safeContractorLogo,
        gasSafeLogo,
        chasLogo,
        safeContractorLogo,
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-6 ">
                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="inline-block mb-2 px-4 py-1 border border-gray-300 rounded-full text-xs tracking-wider text-gray-600">
                            TESTIMONIALS
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
                            What Our Customers Say
                        </h2>
                    </div>

                    {/* Arrows */}
                    <div className="hidden md:flex gap-2">
                        <button className="w-9 h-9 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center">
                            ‹
                        </button>
                        <button className="w-9 h-9 rounded-full bg-[#0B1F3A] text-white flex items-center justify-center">
                            ›
                        </button>
                    </div>
                </div>

                {/* TESTIMONIAL CARDS */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#F3F6FB] rounded-2xl px-8 py-7 w-[420px] mx-auto"
                        >
                            {/* Quote Icon */}
                            <div className="text-blue-600 text-5xl leading-none mb-4">
                                “
                            </div>

                            {/* Quote */}
                            <p className="text-gray-500 text-base leading-relaxed">
                                {item.quote}
                            </p>

                            {/* Footer */}
                            <div className="mt-7 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-[#0B1F3A] text-sm">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.role}
                                    </p>
                                </div>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* DIVIDER */}
                <div className="mt-14 border-t border-gray-200" />

                {/* LOGOS */}
                <div className="mt-10 flex items-center justify-between max-w-4xl mx-auto">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Company logo"
                            className="h-11 object-contain opacity-90"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
