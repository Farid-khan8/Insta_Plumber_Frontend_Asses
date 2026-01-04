import { ShowerHead } from "lucide-react";
import heroImage from "../assets/hero.png"; // your image

function Hero() {
    return (
        <section className="w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
                {/* LEFT CONTENT — SHIFTED RIGHT */}
                <div className="md:col-span-5 md:col-start-2 flex items-center">
                    <div className="pr-0 md:pr-4">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Plumbing Emergency? <br />
                            <span className="text-blue-600">
                                Get Help in Minutes.
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-lg">
                            Book a trusted, local plumber near you—available
                            24/7 with instant response and up-front pricing. No
                            delays. No surprises.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium">
                                Get Instant Help
                            </button>
                            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium">
                                Book a Plumber Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE — FULL BLEED */}
                <div className="md:col-span-6 md:col-start-7 relative">
                    <img
                        src={heroImage}
                        alt="Professional plumber"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
