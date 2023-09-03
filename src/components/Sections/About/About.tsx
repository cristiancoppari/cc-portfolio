import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import Section from "@/components/Section/Section";

const text = [
    "33 years old, based in Buenos Aires, Argentina.",
    "I have a university degree in Marketing and Advertising specializing in SEO.",
    "In 2019 I started to learn JavaScript to automate some SEO tasks. I realized that I enjoyed building things instead of just optimizing them.",
    "Since then I've been coding. My languages of choice are JavaScript and TypeScript. I feel comfortable working with plain HTML, CSS and JavaScript, but I also have experience with React, Next.js and Django. So as Bootstrap and Tailwind CSS.",
];

const About = () => {
    const ref = useRef<HTMLDivElement>(null);

    const isMobile = useMediaQuery("(max-width: 768px)");
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const stagger_text_variants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 30,
                staggerChildren: isMobile ? 0.4 : 0.2,
            },
        },
    };

    return (
        <Section theme="dark" title="About">
            <motion.div
                ref={ref}
                variants={stagger_text_variants}
                initial={"hidden"}
                animate={isInView ? "visible" : ""}
                className="text-container"
            >
                {text.map((t) => (
                    <motion.p variants={stagger_text_variants} key={t} className="text">
                        {t}
                    </motion.p>
                ))}
            </motion.div>
        </Section>
    );
};

export default About;
