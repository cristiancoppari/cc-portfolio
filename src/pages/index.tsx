import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/Sections/About/About";
import Experience from "@/components/Sections/Experience/Experience";
import Works from "@/components/Sections/Works/Works";
import Contact from "@/components/Sections/Contact/Contact";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Works />
            <Contact />
        </main>
    );
}
