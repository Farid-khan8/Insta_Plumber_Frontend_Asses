import { useState } from "react";
import mapImage from "../assets/map2.png"; // adjust path

function ServiceCoverage() {
    const [openSection, setOpenSection] = useState("central");

    const toggle = (key) => {
        setOpenSection(openSection === key ? null : key);
    };

    return (
        <section className="bg-[#F3F6FB] py-12">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* LEFT: MAP */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src={mapImage}
                            alt="Service coverage map"
                            className="w-full max-w-[420px] h-[390px] rounded-2xl object-cover shadow"
                        />
                    </div>

                    {/* RIGHT: CONTENT */}
                    <div>
                        <h3 className="text-4xl font-bold text-[#0B1F3A] leading-tight">
                            Expanding Across London
                            <br />& Essex
                        </h3>

                        <p className="mt-4 text-gray-600 max-w-xl">
                            We're growing fast—now serving all major boroughs
                            across London and Essex with trusted, on-call
                            plumbers ready to help 24/7.
                        </p>

                        {/* Accordion */}
                        <div className="mt-8 space-y-6">
                            {/* Central & North London */}
                            <AccordionItem
                                title="Central & North London"
                                isOpen={openSection === "central"}
                                onClick={() => toggle("central")}
                            >
                                <CheckboxGrid
                                    items={[
                                        "Camden",
                                        "Islington",
                                        "Westminster",
                                        "Haringey",
                                        "Barnet",
                                        "Enfield",
                                        "Hackney",
                                        "Hammersmith",
                                    ]}
                                />
                            </AccordionItem>

                            <AccordionItem
                                title="East London"
                                isOpen={openSection === "east"}
                                onClick={() => toggle("east")}
                            />

                            <AccordionItem
                                title="South London"
                                isOpen={openSection === "south"}
                                onClick={() => toggle("south")}
                            />

                            <AccordionItem
                                title="West London"
                                isOpen={openSection === "west"}
                                onClick={() => toggle("west")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Reusable Components ---------- */

function AccordionItem({ title, isOpen, onClick, children }) {
    return (
        <div>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between text-left text-xl font-semibold text-[#0B1F3A]"
            >
                {title}
                <span
                    className={`transform transition ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    ▾
                </span>
            </button>

            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
}

function CheckboxGrid({ items }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                >
                    <span className="w-5 h-5 bg-blue-600 text-white rounded flex items-center justify-center text-xl">
                        ✓
                    </span>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default ServiceCoverage;
