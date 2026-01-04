import experienceIcon from "../assets/years_experience.svg";
// import verifiedIcon from "../assets/verified.svg";
import verifiedIcon from "../assets/verified_icon.svg";
// import insuredIcon from "../assets/insured.svg";
import insuredIcon from "../assets/insured_icon.svg";

function WhyChoose() {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row min-h-[260px]">
                {/* LEFT PANEL */}
                <div className="md:w-[40%] bg-[#0b2341] text-white flex flex-col items-center justify-center px-8 md:px-8 py-8">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight ">
                        Why Choose <br /> InstaPlumbers?
                    </h2>

                    <button className="mt-6 w-fit bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-md font-medium">
                        Learn More
                    </button>
                </div>

                {/* RIGHT PANEL */}
                <div className="md:w-[60%] bg-[#3f88e5] text-white flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6 w-full text-white px-10 py-8 text-center">
                        {/* Badge 1 */}
                        <div className="flex flex-col items-start gap-3">
                            <img
                                src={experienceIcon}
                                alt="5 years experience"
                                className="w-12 h-12"
                            />
                            <p className="text-lg font-medium leading-snug">
                                Min. 5 Years <br /> Experience
                            </p>
                        </div>

                        {/* Badge 2 */}
                        <div className="flex flex-col items-start gap-3">
                            <img
                                src={verifiedIcon}
                                alt="Vetted and Verified"
                                className="w-12 h-12"
                            />
                            <p className="text-lg font-medium leading-snug">
                                Vetted & <br /> Verified
                            </p>
                        </div>

                        {/* Badge 3 */}
                        <div className="flex flex-col items-start gap-3">
                            <img
                                src={insuredIcon}
                                alt="Fully Insured"
                                className="w-12 h-12"
                            />
                            <p className="text-lg font-medium leading-snug">
                                Fully <br /> Insured
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
