import React from 'react';
import FooterBottomLeft from './footer/FooterBottomLeft';
import FooterBottomRight from './footer/FooterBottomRight';
import FooterTopLeft from './footer/FooterTopLeft';
import FooterTopRight from './footer/FooterTopRight';

const Footer = () =>{
    return(
        <footer>
            <div className="container-fluid">
                <div className="footer-top">
                    <FooterTopLeft/>
                    <FooterTopRight/>
                </div>
                <div className="footer-bottom">
                    <FooterBottomLeft/>
                    <FooterBottomRight/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;