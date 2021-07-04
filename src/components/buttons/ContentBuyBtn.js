import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ContentBuyBtn = ({content,icon}) => {
    return (
        <button className="contentb-buy-btn">
            <FontAwesomeIcon icon={icon} /> {content}
        </button> 
    )
}

export default ContentBuyBtn;