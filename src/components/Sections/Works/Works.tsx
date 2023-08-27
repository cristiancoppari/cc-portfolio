import Section from "@/components/Section/Section";
import Work from "@/components/Blocks/Work/Work";

const works = [
    {
        title: "Maiarc Concierge",
        description: [
            "Maiarc Concierge is a VIP concierge offering luxury experiences all over the world.",
            "They needed a luxury website to match their brand and services. Based on Estudio Leda's design, I built a custom website with SEO best practices.",
        ],
        image: {
            main: "/images/maiarc-image-banner.png",
        },
    },
    {
        title: "Alertas Seguridad Privada",
        description: [
            "Worked along Estudio Leda in the redesign of the website for a security company.",
            "Went from a low performance Wordpress site to a high performance custom website with SEO best practices.",
            "Now the client is receiving x2 more leads than before.",
        ],
        image: {
            main: "/images/alertas-image-banner.png",
        },
    },
];

const Works = () => {
    return (
        <Section padding={false}>
            <div className="padding-x">
                <h2 className="title">Works</h2>
            </div>

            <div className="flex flex-col gap-12">
                {works.map((work) => (
                    <Work key={work.title} work={work} />
                ))}
            </div>
        </Section>
    );
};

export default Works;
