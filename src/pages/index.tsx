import type LocomotiveScroll from "locomotive-scroll";

import { useEffect } from "react";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/Sections/About/About";
import Experience from "@/components/Sections/Experience/Experience";
import Works from "@/components/Sections/Works/Works";
import Contact from "@/components/Sections/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    useEffect(() => {
        let scroll: LocomotiveScroll;

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            scroll = new LocomotiveScroll({
                lenisOptions: {
                    smoothTouch: true,
                },
            });
        })();

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}
