import Section from "@/components/Section/Section";
import JobBlock from "@/components/Blocks/Job/JobBlock";

const jobs = [
    {
        company: "EGO Design",
        position: "Front end developer",
        description:
            "I build digital products with a keen eye for design using Django and the React ecosystem, based on Figma designs.",
        mainProjects: [
            "Built the frontend for Lexus CL with React.js and Redux Tool Kit Query.",
            "Set the basis and frontend workflow for Real Face Value with Scss, ESLint and Stylelint.",
            "Built custom website for FK Tech with Django Template Language, Scss and GSAP.",
            "Built the frontend for Toyota CL Maintenances Services with Next.js, Redux Tool Kit Query and Ant Design.",
            "Developed a frontend styleguide and workflow using ESlint, Stylelint, Scss new syntax and TypeScript using Vite.",
        ],
        dates: "2023 - and so on",
    },
    {
        company: "Wunderman Thompson",
        position: "Front end developer",
        description:
            "Built websites and reusable components for clients like Banco Galicia, L'Oréal, Tuenti, among others. Mainly using Nunjuncks and vanilla JavaScript.",
        mainProjects: [
            "Built reusable componentes for Banco Galicia with Nunjucks and Vanilla JS.",
            "Built the website for Life Seguros with Nunjucks.",
            "Built landing pages for L'Oreal using Nunjucks.",
            "Built landing pages for Tuenti using Nunjucks.",
        ],
        dates: "2020 - 2022",
    },
    {
        company: "Creativedog Agency",
        position: "Marketing Specialist & Front end developer",
        description:
            "I was the responsible for the marketing strategy for all the company clients. I also developed the websites using Twig and React to be used in WordPress.",
        mainProjects: [
            "Built the website for Rosmi Neumaticos using Twig.",
            "Built the website for YoMeAnimo using Twig.",
            "Worked in a app for a shipping company using Ionic Framework.",
            "Create SEO/SEM strategy for the agency.",
            "Create SEM/Social strategy for Cocinas Florencia.",
        ],
        dates: "2019 - 2020",
    },
    {
        company: "The Best Drivers",
        position: "SEO Specialist & Web Developer",
        description:
            "In charge of the marketing strategy for the company. Website development using Elementor. Actually ranking #1 for the main keyword in the niche.",
        mainProjects: [
            "Built the company website using WordPress and Elementor.",
            "Create the SEO/SEM strategy for the company.",
        ],
        dates: "2017 - 2019",
    },
];

const Experience = () => {
    return (
        <Section title="Experience" stickyTitle>
            <div className="flex flex-col gap-12 md:gap-24">
                {jobs.map((job, index) => (
                    <JobBlock key={index} job={job} />
                ))}
            </div>
        </Section>
    );
};

export default Experience;
