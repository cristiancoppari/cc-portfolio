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
                <h3 className="h3">{company}</h3>
                <span className="p muted">{dates}</span>
            </div>

            <p className="p position">{position}</p>
            <p className="p">{description}</p>
        </article>
    );
};

export default JobBlock;
