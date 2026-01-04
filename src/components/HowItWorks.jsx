import step1Image from "../assets/1.svg";
import step2Image from "../assets/2.svg";
import step3Image from "../assets/3.svg";
import step4Image from "../assets/4.svg";

function HowItWorks() {
    const steps = [
        {
            title: "Select Your Issue",
            desc: "Choose the plumbing problem you're facing—leaks, clogs, heating, or anything else.",
            image: step1Image,
        },
        {
            title: "View Upfront Pricing",
            desc: "Get instant, transparent pricing with no hidden charges.",
            image: step2Image,
        },
        {
            title: "Book Instantly",
            desc: "Confirm your booking and get matched with a nearby trusted plumber.",
            image: step3Image,
        },
        {
            title: "Track in Real-Time",
            desc: "Watch your plumber’s live location as they head to your doorstep.",
            image: step4Image,
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Pill */}
                <div className="flex justify-center">
                    <span className="px-4 py-1 border border-gray-300 rounded-full text-xs tracking-widest text-gray-700">
                        HOW IT WORKS
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 text-center text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
                    We’re like Uber — but for plumbers.
                    <br />
                    Simple, fast, and reliable.
                </h2>

                {/* ================= DESKTOP TIMELINE ================= */}
                <div className="relative mt-20 hidden lg:block">
                    {/* Connector line (only between icons) */}
                    <div className="absolute top-[60px] left-[12%] right-[12%] border-t border-dashed border-gray-300" />

                    <div className="grid grid-cols-4 gap-12 relative z-10">
                        {steps.map((item, index) => (
                            <div key={index} className="text-center">
                                {/* SVG Icon */}
                                <div className="mx-auto w-28 h-28 flex items-center justify-center bg-white">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-24 h-24"
                                    />
                                </div>

                                {/* Text */}
                                <h3 className="mt-6 text-lg font-semibold text-[#0B1F3A]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-gray-500 max-w-[260px] mx-auto">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= MOBILE TIMELINE ================= */}
                <div className="relative mt-16 lg:hidden">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-gray-300 -translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center text-center"
                            >
                                {/* SVG Icon */}
                                <div className="relative z-10 bg-white">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20"
                                    />
                                </div>

                                {/* Text */}
                                <h3 className="mt-6 text-lg font-semibold text-[#0B1F3A]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-gray-500">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
