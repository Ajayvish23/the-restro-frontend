import "../styles/Navbar.css"
import {Link} from "react-router-dom";
import UserDropdown from "./UserDropdown.jsx";

export default function Navbar({user, logout}){
    return(
        <nav className={"navBar"}>
            <Link to={"/"} className="navbar-brand home-nav">Home</Link>
            <Link to={"/menu"} className="navbar-brand">Menu</Link>
            <Link to={"/contact"} className="navbar-brand">Contact</Link>
            <Link to={"/about"} className="navbar-brand">About</Link>
            <Link to={"/cart"} className="navbar-brand">Cart</Link>
            <UserDropdown className={"user-dropdown"} user={user} logout={logout}></UserDropdown>
        </nav>
    )
}