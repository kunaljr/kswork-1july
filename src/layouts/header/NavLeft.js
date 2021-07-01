import React from "react";
import { Link } from "react-router-dom";



const NavLeft= () => {
    return(
        <div className="nav-left">
            <div className="nav-item">
                <Link to="/">Main Course</Link>
            </div>
            <div className="nav-item">
                <Link to="/">Starters</Link>
            </div>
            <div className="nav-item">
                <Link to="/">Bytes</Link>
            </div>
        </div>
        
    )
}

export default NavLeft;