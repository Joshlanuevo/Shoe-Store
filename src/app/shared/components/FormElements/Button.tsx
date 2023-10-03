import Link from "next/link";

interface ButtonProps {
    children?: React.ReactNode;
    href?: string;
    className: string;
    onClick: () => void;
    type: "button" | "submit" | "reset"; 
    disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
    children,
    href, 
    className, 
    onClick,
    type,
    disabled 
}) => {
    const handleClick = (e: React.MouseEvent) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            onClick();
        }
    };

    if (href) {
        return (
            <Link 
                href={href}
                className={className}
                passHref
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                className={className}
                type={type}
                onClick={handleClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
}

export default Button;
