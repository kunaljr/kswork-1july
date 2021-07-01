import React from "react";
import Logo from "./header/Logo";
import NavLeft from "./header/NavLeft";
import NavRight from "./header/NavRight";
import LoginButton from "./header/LoginButton";
const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg" id="Main-nav">
                <div className="container-fluid">
                    <div className="Logo-white">
                        <Logo/>
                    </div>
                    <NavLeft/>
                    <NavRight/>
                    <div className="header-login-btn">
                        <LoginButton/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;