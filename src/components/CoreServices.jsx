import plumbingImg from "../assets/Plumbing.png";
import plumbingsvg from "../assets/Plumbing1.svg";

import drainageImg from "../assets/Drainage.png";
import drainagesvg from "../assets/Drainage2.svg";

import heatingImg from "../assets/Heating.png";
import heatingsvg from "../assets/Heating3.svg";

function CoreServices() {
    const services = [
        {
            title: "Plumbing",
            emoji: "🚰",
            desc: "Fixing everything from dripping taps to major pipe bursts and blocked toilets—fast and reliable.",
            image: plumbingImg,
            icon: plumbingsvg,
        },
        {
            title: "Drainage",
            emoji: "🌊",
            desc: "We clear blocked drains, overflowing systems, and bad smells with expert care and modern tools.",
            image: drainageImg,
            icon: drainagesvg,
        },
        {
            title: "Heating",
            emoji: "🔥",
            desc: "Expert repairs and installations for radiators, boilers, and central heating systems to keep your home warm.",
            image: heatingImg,
            icon: heatingsvg,
        },
    ];

    return (
        <section className="bg-[#F3F6FB] py-6 md:py-10">
            <div className="max-w-5xl mx-auto px-12">
                {/* Section Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-2">
                    Our Core Services
                </h2>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm hover:shadow-md transition p-4"
                        >
                            {/* Image */}
                            <div className="relative">
                                {/* Image wrapper */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    {/* SVG Icon — bigger & touching corner */}
                                    <img
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        className="absolute bottom-0 left-0 w-14 h-14"
                                    />
                                </div>

                                {/* Slanted blue bottom line */}
                                <div className="h-4 w-[75%] bg-blue-600 clip-slant" />
                            </div>

                            {/* Content */}
                            <div className="p-2">
                                <h3 className="text-lg font-semibold text-[#0B1F3A] flex items-center gap-2">
                                    {service.emoji} {service.title}
                                </h3>

                                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                                <a
                                    href="#"
                                    className="inline-block mt-2 text-blue-600 text-sm font-semibold hover:underline"
                                >
                                    LEARN MORE
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreServices;
