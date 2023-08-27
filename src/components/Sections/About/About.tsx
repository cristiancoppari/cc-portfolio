import Section from "@/components/Section/Section";

// import "./About.css";

const text = [
    "33 years old, based in Buenos Aires, Argentina.",
    "I have a university degree in Marketing and Advertising specializing in SEO.",
    "In 2019 I started to learn JavaScript to automate some SEO tasks. I realized that I enjoyed building things instead of just optimizing them.",
    "Since then I've been coding. My languages of choice are JavaScript and TypeScript. I feel comfortable working with plain HTML, CSS and JavaScript, but I also have experience with React, Next.js and Django. So as Bootstrap and Tailwind CSS.",
];

const About = () => {
    return (
        <Section theme="dark">
            <div className="col-2-wrapper">
                <h2 className="h2">About</h2>
                <div className="text-container">
                    {text.map((t) => (
                        <p key={t} className="text">
                            {t}
                        </p>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
