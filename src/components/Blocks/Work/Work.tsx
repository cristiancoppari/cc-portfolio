import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TeamMember {
    name: string;
    role: string;
}

interface Work {
    title: string;
    description: string[];
    details: {
        product: string;
        year: number;
        team_members: TeamMember[];
        tech: string[];
    };
    link: string;
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
    const { title, description, details } = work;

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
                <div className="content">
                    <a href={work.link}>
                        <h3 className="h3">{title}</h3>
                    </a>

                    <div className="space-y-2">
                        {description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="details">
                    <div className="label">
                        <p>{details.product}</p>
                    </div>
                    <div className="team">
                        <h4>Team</h4>

                        <ul>
                            {details.team_members.map((member) => (
                                <li key={member.name}>
                                    {member.name} - <strong>{member.role}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tech">
                        <h4>Tech</h4>

                        <ul>
                            {details.tech.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default Work;
