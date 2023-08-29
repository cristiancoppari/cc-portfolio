import { type FC } from "react";
import { cn } from "mxcn";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    theme?: "dark";
    padding?: boolean;
    title: string;
    stickyTitle?: boolean;
}

const Section: FC<SectionProps> = ({ children, theme, padding = true, title, stickyTitle = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className={cn("section", theme === "dark" ? "theme-dark" : "", padding ? "padding-x" : "")}>
            <div className="col-2-wrapper">
                <motion.h2
                    ref={ref}
                    className={cn("h2", stickyTitle ? "sticky top-9" : "")}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                    }}
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
