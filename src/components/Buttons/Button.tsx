interface ButtonProps {
    type: "button" | "submit" | "reset";
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = "button", label }) => {
    return (
        <button type={type} className="button">
            {label}
        </button>
    );
};

export default Button;
