import blog1 from "../assets/blog1.png";
import blog3 from "../assets/blog3.png";
import blog2 from "../assets/blog2.png";

function BlogSection() {
    const blogs = [
        {
            image: blog1,
            date: "16 OCT 2024",
            title: "Top 5 Signs You Need a Plumber – Before It’s Too Late",
            category: "PLUMBER",
            author: "ANAIS EMMERICH",
        },
        {
            image: blog2,
            date: "16 OCT 2024",
            title: "Boiler Not Working? Try These Quick Fixes First",
            category: "SPECIAL REPAIRS",
            author: "ANAIS EMMERICH",
        },
        {
            image: blog3,
            date: "16 OCT 2024",
            title: "How to Unblock a Drain – Safely and Effectively",
            category: "HANDYMAN",
            author: "MARC RATKE",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <span className="inline-block mb-3 px-4 py-1 border border-gray-300 rounded-full text-xs tracking-wider text-gray-600">
                            RECENT BLOG
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
                            From the InstaPlumbers Blog
                        </h2>
                    </div>

                    <button className="hidden md:inline-flex items-center px-6 py-2 border border-[#0B1F3A] rounded-full text-sm font-semibold text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition">
                        VIEW ALL POST
                    </button>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-60 object-cover"
                                />

                                {/* Date Pill */}
                                <span className="absolute -bottom-1 right-6 bg-white px-4 py-2 rounded-t-2xl rounded-b-none text-xs font-medium text-blue-600 ">
                                    {blog.date}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-[#0B1F3A] leading-snug">
                                    {blog.title}
                                </h3>

                                <p className="mt-4 text-xs uppercase tracking-wide text-gray-500">
                                    {blog.category} /{" "}
                                    <span className="font-medium">
                                        {blog.author}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View Button */}
                <div className="mt-10 flex justify-center md:hidden">
                    <button className="px-6 py-2 border border-[#0B1F3A] rounded-full text-sm font-semibold text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition">
                        VIEW ALL POST
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
