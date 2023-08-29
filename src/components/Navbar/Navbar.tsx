import Link from "next/link";
import { motion } from "framer-motion";

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

const Navbar = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, direction] = usePageYOffset();

    return (
        <motion.nav
            className="navbar section-p"
            variants={nav_variants}
            initial={"hidden"}
            animate={direction === "down" ? "visible" : "hidden"}
        >
            <button>Menu</button>
            <ul>
                {nav_links.map((link) => (
                    <li key={link.name} className="h5 uppercase">
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
