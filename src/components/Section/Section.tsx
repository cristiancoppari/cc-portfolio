import { cn } from "mxcn";
import { forwardRef } from "react";

// import "./Section.css";

interface SectionProps {
    children: React.ReactNode;
    theme?: "dark";
    padding?: boolean;
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, theme, padding = true }, ref) => {
    return (
        <section ref={ref} className={cn("section", theme === "dark" ? "theme-dark" : "", padding ? "padding-x" : "")}>
            {children}
        </section>
    );
});

// This is because ESLint error
Section.displayName = "Section";

export default Section;
