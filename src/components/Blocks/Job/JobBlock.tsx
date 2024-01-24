import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface JobBlockProps {
    job: {
        company: string;
        position: string;
        description: string;
        dates: string;
        mainProjects: string[];
    };
}

const job_variants = {
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

const JobBlock: React.FC<JobBlockProps> = ({ job }) => {
    const { company, position, description, dates } = job;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.article
            className="job-block"
            ref={ref}
            variants={job_variants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
        >
            <div className="title-and-date">
                <h3 className="h3">{company}</h3>
                <span className="p muted">{dates}</span>
            </div>

            <p className="p position">{position}</p>
            <p className="p">{description}</p>

            <div className="main-projects">
                <p className="p position">Main projects</p>
                <ul className="">
                    {job.mainProjects.map((project) => (
                        <li key={project} className="p">
                            {project}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
};

export default JobBlock;
