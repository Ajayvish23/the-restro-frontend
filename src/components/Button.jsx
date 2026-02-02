import "../styles/Button.css";
import {Link} from "react-router-dom";

function Button({ linkto, children, variant = "primary", onClick, type = "button" }) {
    if(linkto){
        return(
            <Link to={linkto} className={`btn btn-${variant}`}>{children}</Link>
        )
    }
    return (
        <button
            type={type}
            className={`btn btn-${variant}`}
            onClick={onClick}

        >
            {children}
        </button>
    );
}

export default Button;
