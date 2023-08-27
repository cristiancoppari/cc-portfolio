import Section from "@/components/Section/Section";
import JobBlock from "@/components/Blocks/Job/JobBlock";

const jobs = [
    {
        company: "EGO Design",
        position: "Front end developer",
        description: "Building digital products with a keen eye for design using Django and the React ecosystem.",
        dates: "2023 - and so on",
    },
    {
        company: "Wunderman Thompson",
        position: "Front end developer",
        description:
            "Built websites and reusable components for clients like Banco Galicia, L'Oréal, Tuenti, among others. Mainly using Django and vanilla JavaScript.",
        dates: "2020 - 2022",
    },
    {
        company: "Creativedog Agency",
        position: "Marketing Specialist & Front end developer",
        description:
            "I was the responsible for the marketing strategy for the company. I also developed the website using Twig and React.",
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
            <h2 className="title">Experience</h2>

            <div className="flex flex-col gap-12">
                {jobs.map((job, index) => (
                    <JobBlock key={index} job={job} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;
