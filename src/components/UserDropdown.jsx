import "../styles/UserDropdown.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function UserDropdown({user, logout}) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
                // console.log(dropdownRef.current)
                // console.log(dropdownRef.current.contains(e.target))
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    return (
        <>
            {/* User dropdown */}
            <div className="user-dropdown" ref={dropdownRef}>
                <button className="user-icon" onClick={() => setOpen(prev => !prev)}>
                    <FontAwesomeIcon icon={faCircleUser} />
                </button>

                {open && (
                    <div className="dropdown-menu">
                        {user?<>
                            <Link to={"#"} onClick={() => setOpen(false)}>Profile</Link>
                            <Link to={"#"} onClick={() => setOpen(false)}>My Orders</Link>
                            <Link to={"/"} onClick={logout}>Logout</Link>
                            </>:<>
                            <Link to={"/login"} onClick={() => setOpen(false)}>Login</Link>
                            <Link to={"/signup"} onClick={() => setOpen(false)}>Sign Up</Link>
                            </>
                        }
                    </div>
                )}
            </div>
        </>
    );
}
