import Link from "next/link";

// import "./Navbar.css";

const nav_links = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="navbar section-p">
            <button>Menu</button>
            <ul>
                {nav_links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
