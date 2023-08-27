interface Work {
    title: string;
    description: string[];
    image: {
        main: string;
    };
}

interface WorkProps {
    work: Work;
}

const Work: React.FC<WorkProps> = ({ work }) => {
    const { title, description, image } = work;
    return (
        <article className="work">
            <div className="padding-x">
                <h3>{title}</h3>

                <div className="space-y-2">
                    {description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <img src={image.main} alt="" />
        </article>
    );
};

export default Work;
