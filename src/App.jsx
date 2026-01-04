import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import CoreServices from "./components/CoreServices";
import CallPlumberCTA from "./components/CallPlumberCTA";
import ServiceCoverage from "./components/ServiceCoverage";
import ExperienceSection from "./components/ExperienceSection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Hero />
            <WhyChoose />
            <HowItWorks />
            <CoreServices />
            <CallPlumberCTA />
            <ServiceCoverage />
            <ExperienceSection />
            <Testimonials />
            <FAQ />
            <BlogSection />
            <Footer />
        </div>
    );
}

export default App;
