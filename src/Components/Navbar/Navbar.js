import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar () {
    return (
        <ul classname="nav nav-tabs">
            <li className="nav-item">
                <NavLink
                to="/"
                end
                className={({isActive}) => 
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
             Home
            </NavLink>
            </li>;

            <li className="nav-item">
                <NavLink
                to="jobsearch"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
            JobSearch
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                to="contact"
                className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
            Contact Us 
                </NavLink>
            </li>
        </ul>
    );
}


export default Navbar; 
