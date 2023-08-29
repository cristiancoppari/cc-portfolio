import { motion, useMotionValueEvent, useScroll } from "framer-motion";

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

const title = "Front End Developer";
const paragraph = `I'm Cristian Coppari, a front end web dev and former SEO specialist who thrives in building simple, performant and good looking websites and webapps.`;

const Hero: React.FC = () => {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest);
    });

    return (
        <div className="hero section-p">
            <motion.div
                className="title-and-description"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={hero_variants}>
                    <h1 className="h1">{title}</h1>
                </motion.div>

                <motion.p variants={hero_variants} className="h4">
                    {paragraph}
                </motion.p>
            </motion.div>

            <div className="content">
                <p className="location">
                    Currently working at <strong>EGO Design.</strong>
                </p>

                <motion.h2 className="h3 freelance">Available for freelance work worldwide!</motion.h2>
            </div>
        </div>
    );
};

export default Hero;
