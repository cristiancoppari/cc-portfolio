import Section from "@/components/Section/Section";
import Form from "@/components/Form/Form";

const Contact = () => {
    return (
        <Section>
            <h2 className="title">Contact</h2>

            <h3 className="subtitle">Let&apos;s talk about your next project.</h3>

            <p>
                I&apos;m currently available for freelance work. If you have a project that you want to get started,
                think you need my help with something or say hi, leave me a message.
            </p>

            <Form />
        </Section>
    );
};

export default Contact;
