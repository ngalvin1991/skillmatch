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
                
            </NavLink>
            </li>
        </ul>
    )
}


export default Navbar; 
