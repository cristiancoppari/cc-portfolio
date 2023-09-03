import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import Section from "@/components/Section/Section";
import Form from "@/components/Form/Form";

const text_variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
};

const Contact = () => {
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
        <Section title="Contact">
            <div ref={ref}>
                <motion.div variants={stagger_text_variants} initial="hidden" animate={isInView ? "visible" : ""}>
                    <motion.h3 variants={text_variants} className="h6">
                        Let&apos;s talk about your next project.
                    </motion.h3>

                    <motion.p variants={text_variants}>
                        I&apos;m currently available for freelance work. If you have a project that you want to get
                        started, think you need my help with something or say hi, leave me a message.
                    </motion.p>
                </motion.div>

                <Form />
            </div>
        </Section>
    );
};

export default Contact;
