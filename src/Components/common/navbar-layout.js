import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/logo.png"

function NavbarLayout(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-white nav-layout">
            <div className="container">
                <NavLink className="navbar-brand" href="#" to={"/"}>
                    <img src={Logo} className={"nav-logo"} alt={"brand"}/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav gap-20">
                        <li className="nav-item ">
                            <NavLink className="nav-link " aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link " to={"/features"}>Courses</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link " to={"/pricing"}>Institutes</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link " to={"/pricing"}>Events</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link " to={"/pricing"}>Blogs</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link " to={"/pricing"}>About Us</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link " to={"/pricing"}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={"d-lg-block d-none"}>
                    <NavLink className="register-btn" href="#" to={"/"}>
                         Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavbarLayout;