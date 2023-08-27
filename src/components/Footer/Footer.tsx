import { useRef } from "react";

const social_links = [
    {
        name: "Github",
        url: "https://github.com/cristiancoppari",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cristiancoppari/",
    },
    {
        name: "X",
        url: "https://twitter.com/cristiancoppari",
    },
    {
        name: "Fiverr",
        url: "https://www.fiverr.com/cristiancoppari",
    },
];

const Footer = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (divRef.current) {
            divRef.current.classList.add("dark");
        }
    };

    const handleMouseLeave = () => {
        if (divRef.current) {
            divRef.current.classList.remove("dark");
        }
    };

    return (
        <footer ref={divRef} className="section-p" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ul>
                {social_links.map((social_link) => (
                    <li key={social_link.name}>
                        <a href={social_link.url} target="_blank" className="h6">
                            {social_link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <p className="muted">Designed and Developed by Cristian Coppari</p>
        </footer>
    );
};

export default Footer;
