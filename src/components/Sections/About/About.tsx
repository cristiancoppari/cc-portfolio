import Section from "@/components/Section/Section";

// import "./About.css";

const text = [
    "33 years old, based in Buenos Aires, Argentina.",
    "Before the pandemic I was a SEO Specialist, focusing in optimizing websites for search engines.",
    "Now I'm a front end dev mainly working with Django and the React ecosystem building that websites.",
];

const About = () => {
    return (
        <Section theme="dark">
            <h2 className="title">About</h2>
            <div className="text-container">
                {text.map((t) => (
                    <p key={t} className="text">
                        {t}
                    </p>
                ))}
            </div>
        </Section>
    );
};

export default About;
