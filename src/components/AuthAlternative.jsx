import { Link } from "react-router-dom";

export default function AuthAlternative({ alternative }) {
    const { text, link, linkText } = alternative;
    return (
        <p>
            <span>{text}</span>
            <Link className="pl-2 text-blue-500" to={link}>
                {linkText}
            </Link>
        </p>
    );
}
