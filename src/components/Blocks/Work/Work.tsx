import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Work {
    title: string;
    description: string[];
    image: {
        sm: string;
        md: string;
    };
}

interface WorkProps {
    work: Work;
}

const work_variants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.6,
        },
    },
};

const Work: React.FC<WorkProps> = ({ work }) => {
    const { title, description, image } = work;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.article
            className="work"
            ref={ref}
            variants={work_variants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
        >
            <div className="col-2-wrapper">
                <div className="content padding-x">
                    <h3 className="h3">{title}</h3>

                    <div className="space-y-2">
                        {description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <picture>
                    <source srcSet={`${image.md}`} media="(min-width: 768px)" />
                    <img src={image.sm} alt="" />
                </picture>
            </div>
        </motion.article>
    );
};

export default Work;
