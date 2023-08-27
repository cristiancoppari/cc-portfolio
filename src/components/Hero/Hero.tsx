// import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero section-p">
            <div className="title-and-description">
                <h1>Front End Developer</h1>

                <p className="description">
                    I&apos;m Cristian Coppari, a front end web dev and former SEO specialist who thrives in building
                    simple, performant and good looking apps.
                </p>
            </div>

            <div className="content">
                <p className="location">
                    Currently working at <strong>EGO Design.</strong>
                </p>

                <p className="freelance">Available for working freelance wordwide!</p>
            </div>
        </div>
    );
};

export default Hero;
