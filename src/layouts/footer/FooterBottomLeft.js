import React from "react";
import Logo from "../header/Logo";

const FooterBottomLeft = () =>{
    return(
        <div className="footer-bottom-left">
            <Logo/>
            <div className="footer-bottom-left-item">
                &copy; 2017 - 2021 UpSkillFun All Rights Reserved | Terms & Coditons.
                <p className="color-green">PROUDLY MADE IN INDIA</p>
            </div>
        </div>
    )
}

export default FooterBottomLeft;