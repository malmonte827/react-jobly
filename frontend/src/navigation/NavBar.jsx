import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <ul className="navbar-nav">
                <li className="nav-link">
                    <NavLink className="nav-link" to="/companies">Companies</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink className="nav-link" to="profile">Profile</NavLink>
                </li>
                <li className="nav-link">
                    <Link className="nav-link" to="/" onClick={logout}>
                        Log Out {currentUser.firstName || currentUser.username}
                    </Link>
                </li>
            </ul>
        );
    }
    function loggedOutNav() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-link">
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </li>
            </ul>
        );
    }
    return (
        <nav className="Navigation">
            <div>
                <Link className="nav-brand" to="/">
                    Jobly
                </Link>
                {currentUser ? loggedInNav() : loggedOutNav()}
            </div>
        </nav>
    );
}

export default NavBar;
