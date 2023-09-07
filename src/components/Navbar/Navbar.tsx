import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import cn from "mxcn";

import usePageYOffset from "@/hooks/usePageYOffset";

const nav_links = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const nav_variants = {
    hidden: {
        opacity: 0,
        y: "-100%",
        transition: {
            delay: 0.2,
        },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        },
    },
};

const ul_variants = {
    hidden: {
        opacity: 0,
        y: "-100%",
        transition: {
            delay: 0.2,
        },
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

const nav_mobile_variants = {
    hidden: {
        opacity: 0,
        x: "100%",
        transition: {
            delay: 0.2,
        },
    },
    visible: {
        opacity: 1,
        x: "0",
        transition: {
            type: "tween",
            animation: "easeIn",
        },
    },
    exit: {
        opacity: 0,
        x: "100%",
        transition: {
            type: "spring",
        },
    },
};

const Navbar = () => {
    const [open, setIsOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, direction] = usePageYOffset();

    return (
        <div>
            <motion.nav
                className="navbar section-p"
                variants={nav_variants}
                initial={"hidden"}
                animate={direction === "down" ? "visible" : "hidden"}
            >
                <button onClick={() => setIsOpen(true)}>Menu</button>
                <ul className="navbar-desktop">
                    {nav_links.map((link) => (
                        <li key={link.name} className="h5 uppercase">
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={nav_mobile_variants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={cn(`navbar-mobile`)}
                    >
                        <button onClick={() => setIsOpen(false)}>X</button>
                        <motion.ul variants={ul_variants} initial="hidden" animate="visible">
                            {nav_links.map((link) => (
                                <motion.li
                                    variants={ul_variants}
                                    initial="hidden"
                                    animate="visible"
                                    key={link.name}
                                    className="h2 uppercase"
                                >
                                    <Link href={link.path}>{link.name}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
