import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HeroBannerPlayBtn = ({btnname}) => {
    
    return(
        <button type='button' className="playbtn">
        <FontAwesomeIcon icon={faPlay}/> {btnname}</button>
    )
}

export default HeroBannerPlayBtn;