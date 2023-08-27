import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/Sections/About/About";
import Experience from "@/components/Sections/Experience/Experience";
import Works from "@/components/Sections/Works/Works";
import Contact from "@/components/Sections/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Works />
            <Contact />
            <Footer />
        </>
    );
}
