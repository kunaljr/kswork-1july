import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCartPlus } from "@fortawesome/free-solid-svg-icons";



const NavRight = () =>{
    return(
        <div className="nav-right">
            <div className="nav-item">
                <Link to="/">Batch Training</Link>
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faCartPlus}/>
            </div>
            <div className="nav-item">
                <FontAwesomeIcon icon={faMoon}/>
            </div>
        </div>
    )
}

export default NavRight;