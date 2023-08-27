import Button from "@/components/Buttons/Button";

const Form = () => {
    return (
        <form className="form">
            <div className="form-input-container">
                <label htmlFor="name" className="h6">
                    Name
                </label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="form-input-container">
                <label htmlFor="email" className="h6">
                    Email
                </label>
                <input type="text" id="email" name="email" />
            </div>
            <div className="form-input-container">
                <label htmlFor="message" className="h6">
                    Message
                </label>
                <textarea id="message" name="message" cols={30} rows={5}></textarea>
            </div>

            <Button type="submit" label="Send message" onClick={() => console.log("clicked")} />
        </form>
    );
};

export default Form;
