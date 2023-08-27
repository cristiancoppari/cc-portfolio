interface Work {
    title: string;
    description: string[];
    image: {
        sm: string;
        md: string;
    };
}

interface WorkProps {
    work: Work;
}

const Work: React.FC<WorkProps> = ({ work }) => {
    const { title, description, image } = work;
    return (
        <article className="work">
            <div className="col-2-wrapper">
                <div className="content padding-x">
                    <h3 className="h3">{title}</h3>

                    <div className="space-y-2">
                        {description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                <picture>
                    <source srcSet={`${image.md}`} media="(min-width: 768px)" />
                    <img src={image.sm} alt="" />
                </picture>
            </div>
        </article>
    );
};

export default Work;
