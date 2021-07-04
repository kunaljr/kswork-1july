import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ContentButton = () => {
    return(
        <button className="content-btn"><FontAwesomeIcon icon={faPlay}/> Lesson 01</button>
    )
}

export default ContentButton;