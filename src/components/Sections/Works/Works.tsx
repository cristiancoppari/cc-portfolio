import Section from "@/components/Section/Section";
import Work from "@/components/Blocks/Work/Work";

const works = [
    {
        title: "Easy Pagos",
        description: [
            "Easy Pagos is a new digital wallet in Argentina.",
            "They are lauching their product so they need a new website.",
            "Built with Astro and Tailwind CSS, and SEO best practices to rank better on Google.",
        ],
        details: {
            product: "Static website",
            year: 2023,
            team_members: [
                {
                    name: "Cristian C. (who writes)",
                    role: "Developer",
                },
            ],
            tech: ["Astro.js", "Tailwind CSS"],
        },
        link: "https://easypagos.com.ar",
    },
    {
        title: "STRITFUD",
        description: [
            "STRITFUD is a italian food restaurant and focacceria in Málaga, Spain.",
            "They have recently opened their doors and needed a website to showcase their menu and location.",
            "I built a custom link tree clone with Google Analytics tracking, and SEO wording to help them rank on Google.",
        ],
        details: {
            product: "Static website",
            year: 2023,
            team_members: [
                {
                    name: "Cristian C. (who writes)",
                    role: "Developer",
                },
            ],
            tech: ["Next.js", "Tailwind CSS", "Google Analytics"],
        },
        link: "https://stritfud.es",
    },
    {
        title: "MAIARC Concierge",
        description: [
            "Maiarc Concierge is a VIP concierge offering luxury experiences all over the world.",
            "They needed a luxury website to match their brand and services. Based on Estudio Leda's design, I built a custom website with SEO best practices.",
        ],
        details: {
            product: "Headless CMS website",
            year: 2023,
            team_members: [
                {
                    name: "Estudio Leda",
                    role: "Product design",
                },
                {
                    name: "Cristian C. (who writes)",
                    role: "Developer",
                },
            ],
            tech: ["Next.js", "Tailwind CSS", "Strapi"],
        },
        link: "https://www.maiarconcierge.com/",
    },
    {
        title: "Alertas Seguridad Privada",
        description: [
            "Worked along Estudio Leda in the redesign of the website for a security company.",
            "Went from a low performance Wordpress site to a high performance custom website with SEO best practices.",
            "Now the client is receiving x2 more leads than before.",
        ],
        details: {
            product: "Static website",
            year: 2021,
            team_members: [
                {
                    name: "Estudio Leda",
                    role: "Product design",
                },
                {
                    name: "Cristian C. (who writes)",
                    role: "Developer",
                },
            ],
            tech: ["Next.js", "Tailwind CSS"],
        },
        link: "https://alertaseguridadprivada.com.ar/",
    },
    {
        title: "The Best Drivers",
        description: [
            "The Best Drivers is a enterprise remise company in Buenos Aires, Argentina.",
            "With more than 20 years in the industry, they needed a website to get more leads.",
            "Creativedog Agency built a website with WordPress, and I was in charge of the SEO and performance.",
            "The site ranks #1 for the main keywords in the industry, and the client is receiving x5 more leads than before.",
        ],
        details: {
            product: "SEO Strategy",
            year: 2023,
            team_members: [
                {
                    name: "Cristian C. (who writes)",
                    role: "SEO specialist",
                },
            ],
            tech: ["Google Tag Manager", "Google Ads", "Google Analytics"],
        },
        link: "https://bestdrivers.com.ar/",
    },
];

const Works = () => {
    return (
        <Section title="Works">
            <div className="works-container">
                {works.map((work) => (
                    <Work key={work.title} work={work} />
                ))}
            </div>
        </Section>
    );
};

export default Works;
