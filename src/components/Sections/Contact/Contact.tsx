import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Section title="Contact">
            <div ref={ref}>
                <motion.div variants={text_variants} initial="hidden" animate={isInView ? "visible" : ""}>
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
