import {Link} from "react-router-dom";
import "../styles/NotFound.css"

export default function NotFound(){
    return(
        <div className="notfound-container">
            <h1 className="oops-text">Oops!</h1>
            <h2 className="error-title">404 - PAGE NOT FOUND</h2>
            <p className="error-desc">
                The page you are looking for might have been removed, <br/>
                had its name changed or is temporarily unavailable.
            </p>
            <Link to={"/"} className="home-btn">Go to home</Link>
        </div>
    )
}