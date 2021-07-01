import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare,faInstagramSquare,faTwitterSquare,faYoutubeSquare,
            faGooglePlay,faApple} from "@fortawesome/free-brands-svg-icons"
const FooterTopRight = () =>{
    return(
        <div className="footer-right">
            <div className="footer-right-item">
                Connect with Us
                <div className="social-media-icons">
                    <div className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                    </div>
                    <div className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faInstagramSquare}/>
                    </div>
                    <div className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faTwitterSquare}/>
                    </div>
                    <div className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faYoutubeSquare}/>
                    </div>
                </div>
            </div>
            <div className="footer-right-item">
                Available On
                <div className="available-on-icons">
                    <div className="footer-available-on-icon">
                        <FontAwesomeIcon icon={faGooglePlay}/>
                    </div>
                    <div className="footer-available-on-icon">
                        <FontAwesomeIcon icon={faApple}/>
                    </div>
                    <div className="footer-available-on-icon">
                        <FontAwesomeIcon icon={faTv}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTopRight;