import Section from "@/components/Section/Section";
import JobBlock from "@/components/Blocks/Job/JobBlock";

const jobs = [
    {
        company: "EGO Design",
        position: "Front end developer",
        description:
            "I build digital products with a keen eye for design using Django and the React ecosystem, based on Figma designs.",
        dates: "2023 - and so on",
    },
    {
        company: "Wunderman Thompson",
        position: "Front end developer",
        description:
            "Built websites and reusable components for clients like Banco Galicia, L'Oréal, Tuenti, among others. Mainly using Nunjuncks (Django for js) and vanilla JavaScript.",
        dates: "2020 - 2022",
    },
    {
        company: "Creativedog Agency",
        position: "Marketing Specialist & Front end developer",
        description:
            "I was the responsible for the marketing strategy for all the company clients. I also developed the websites using Twig and React to be used in WordPress.",
        dates: "2019 - 2020",
    },
    {
        company: "The Best Drivers",
        position: "SEO Specialist & Web Developer",
        description:
            "In charge of the marketing strategy for the company. Website development using Elementor. Actually ranking #1 for the main keyword in the niche.",
        dates: "2017 - 2019",
    },
];

const Experience = () => {
    return (
        <Section>
            <div className="col-2-wrapper">
                <h2 className="h2">Experience</h2>

                <div className="flex flex-col gap-12 md:gap-24">
                    {jobs.map((job, index) => (
                        <JobBlock key={index} job={job} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
