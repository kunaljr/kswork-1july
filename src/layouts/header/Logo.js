import React from "react";
import {Link} from "react-router-dom";
import logoWhite from "./../../assets/images/logo/upskillfun-logo.png"
const Logo = () =>{
    return(
        <Link className="navbar-brand light-logo" to="/">
               <img src={logoWhite} height="30" alt="Logo-white"/>         
        </Link>
    )
}

export default Logo;