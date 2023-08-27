import { cn } from "mxcn";

// import "./Section.css";

interface SectionProps {
    children: React.ReactNode;
    theme?: "dark";
    padding?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, theme, padding = true }) => {
    return (
        <section className={cn("section", theme === "dark" ? "theme-dark" : "", padding ? "padding-x" : "")}>
            {children}
        </section>
    );
};

export default Section;
