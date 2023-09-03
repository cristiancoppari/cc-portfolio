import { motion, useTransform, useScroll } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const hero_variants = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        },
    },
};

const containerVariants = {
    hidden: {
        opacity: 1, // We want the container to be visible, but children will be hidden
    },
    visible: {
        opacity: 1,
        transition: {
            // delayChildren: 0.2, // Delay before child animations start
            staggerChildren: 0.5, // Time between each child starting its animation
        },
    },
};

const ranges = {
    mobile: {
        init: [0, 1],
        end: [100, -3500],
    },
    desktop: {
        init: [0, 1],
        end: [1000, -4500],
    },
};

const Hero: React.FC = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const { scrollYProgress } = useScroll();

    const deviceType = isMobile ? "mobile" : "desktop";
    const { init, end } = ranges[deviceType];

    const x = useTransform(scrollYProgress, init, end);

    return (
        <div className="hero section-p">
            <motion.div
                className="title-and-description"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={hero_variants}>
                    <h1 className="h1">Front End Developer</h1>
                </motion.div>

                <motion.p variants={hero_variants} className="h4">
                    {`I'm Cristian Coppari, a front end web dev and former SEO specialist who thrives in building simple, performant and good looking websites and webapps.`}
                </motion.p>
            </motion.div>

            <div className="content">
                <p className="location">
                    9 - 5 @ <strong>EGO Design.</strong>
                </p>

                <motion.h2 className="h3 freelance" style={{ x: x }}>
                    Available for freelance work worldwide!
                </motion.h2>
            </div>
        </div>
    );
};

export default Hero;
