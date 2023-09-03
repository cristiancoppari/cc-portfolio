import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Button from "@/components/Buttons/Button";

const stagger_els_variants = {
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
        },
    },
};

const Form = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    return (
        <motion.form
            ref={ref}
            variants={stagger_els_variants}
            initial={"hidden"}
            animate={isInView ? "visible" : ""}
            className="form"
        >
            <motion.div variants={stagger_els_variants} className="form-input-container">
                <label htmlFor="name" className="h6">
                    Name
                </label>
                <input type="text" id="name" name="name" />
            </motion.div>

            <motion.div variants={stagger_els_variants} className="form-input-container">
                <label htmlFor="email" className="h6">
                    Email
                </label>
                <input type="text" id="email" name="email" />
            </motion.div>

            <motion.div variants={stagger_els_variants} className="form-input-container">
                <label htmlFor="message" className="h6">
                    Message
                </label>
                <textarea id="message" name="message" cols={30} rows={5}></textarea>
            </motion.div>

            <motion.div variants={stagger_els_variants}>
                <Button type="submit" label="Send message" onClick={() => console.log("clicked")} />
            </motion.div>
        </motion.form>
    );
};

export default Form;
