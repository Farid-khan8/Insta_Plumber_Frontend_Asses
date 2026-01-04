import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQ() {
    const faqs = [
        {
            question: "How can I verify that InstaPlumbers are reliable?",
            answer: "All our plumbers are vetted, reviewed, and rated by real customers. We only work with trusted, experienced professionals.",
        },
        {
            question: "Are your plumbers registered with Gas Safe (CORGI)?",
            answer: "Yes. All gas-related work is carried out by Gas Safe registered engineers to ensure safety and compliance.",
        },
        {
            question: "Do your plumbers have insurance?",
            answer: "Absolutely. Every plumber on our platform is fully insured for public liability and professional work.",
        },
        {
            question: "How much do your plumbers cost?",
            answer: "You’ll see upfront pricing before booking—no hidden charges, no surprises.",
        },
        {
            question: "Do you charge a call-out fee?",
            answer: "No unnecessary call-out fees. You only pay for the service you book.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="text-center">
                    <span className="inline-block mb-3 px-4 py-1 border border-gray-300 rounded-full text-xs tracking-wider text-gray-600">
                        FAQ
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                        We’ve answered the most common questions to help you
                        book with confidence.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="mt-14 space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-4"
                            >
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <h3 className="text-lg font-semibold text-[#0B1F3A]">
                                        {item.question}
                                    </h3>

                                    <span className="ml-4 flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-600 transition-transform ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        isOpen ? "max-h-40 mt-3" : "max-h-0"
                                    }`}
                                >
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
