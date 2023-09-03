import { type FC } from "react";
import { cn } from "mxcn";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    theme?: "dark";
    padding?: boolean;
    title: string;
    stickyTitle?: boolean;
}

const slide_text_variants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 1,
        },
    },
};

const Section: FC<SectionProps> = ({ children, theme, padding = true, title, stickyTitle = false }) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section ref={ref} className={cn("section", theme === "dark" ? "theme-dark" : "", padding ? "padding-x" : "")}>
            <div className="col-2-wrapper">
                <motion.h2
                    variants={slide_text_variants}
                    initial={"hidden"}
                    animate={isInView ? "visible" : ""}
                    className={cn("h2", stickyTitle ? "sticky top-9" : "")}
                >
                    {title}
                </motion.h2>

                {children}
            </div>
        </section>
    );
};

// This is because ESLint error
Section.displayName = "Section";

export default Section;
