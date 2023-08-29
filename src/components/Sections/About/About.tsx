import { type Variants, motion } from "framer-motion";

import Section from "@/components/Section/Section";

const text = [
    "33 years old, based in Buenos Aires, Argentina.",
    "I have a university degree in Marketing and Advertising specializing in SEO.",
    "In 2019 I started to learn JavaScript to automate some SEO tasks. I realized that I enjoyed building things instead of just optimizing them.",
    "Since then I've been coding. My languages of choice are JavaScript and TypeScript. I feel comfortable working with plain HTML, CSS and JavaScript, but I also have experience with React, Next.js and Django. So as Bootstrap and Tailwind CSS.",
];

const container_variants = {
    hidden: {
        opacity: 1, // We want the container to be visible, but children will be hidden
    },
    visible: {
        opacity: 1,
        transition: {
            type: "spring",
            delayChildren: 1,
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
};

const text_variants: Variants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        },
    },
};

const About = () => {
    return (
        <Section theme="dark" title="About">
            <motion.div className="text-container" variants={container_variants} initial="hidden" animate="visible">
                {text.map((t) => (
                    <motion.p key={t} className="text" variants={text_variants}>
                        {t}
                    </motion.p>
                ))}
            </motion.div>
        </Section>
    );
};

export default About;
