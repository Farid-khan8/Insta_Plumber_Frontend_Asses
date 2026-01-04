import mapImage from "../assets/map1.png"; // update path if needed

function CallPlumberCTA() {
    return (
        <section className="bg-white py-12 md:py-14">
            <div className="max-w-5xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {/* LEFT: MAP IMAGE */}
                    <div className="h-full flex justify-center md:justify-start">
                        <img
                            src={mapImage}
                            alt="Nearby plumbers map"
                            className="w-full h-full max-w-md rounded-2xl object-cover"
                        />
                    </div>

                    {/* RIGHT: BLUE CTA CARD */}
                    <div className="relative bg-blue-600 rounded-2xl p-8 md:p-10 text-white overflow-hidden h-full flex flex-col justify-center">
                        {/* Optional decorative gear (very subtle) */}
                        {/* <div className="absolute top-6 right-6 opacity-10">
                            ⚙️
                        </div> */}

                        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                            Call an InstaPlumber
                            <br />
                            Now
                        </h3>

                        <p className="mt-4 text-blue-100 max-w-md">
                            We have local plumbers near you—ready to assist
                            24/7, day or night.
                        </p>

                        <button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition w-fit">
                            CALL A PLUMBER NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallPlumberCTA;
