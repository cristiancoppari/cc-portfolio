// import "./JobBlock.css";

interface JobBlockProps {
    job: {
        company: string;
        position: string;
        description: string;
        dates: string;
    };
}

const JobBlock: React.FC<JobBlockProps> = ({ job }) => {
    const { company, position, description, dates } = job;

    return (
        <article className="job-block">
            <div className="title-and-date">
                <h3>{company}</h3>
                <span>{dates}</span>
            </div>

            <h4 className="position">{position}</h4>
            <p className="description">{description}</p>
        </article>
    );
};

export default JobBlock;
