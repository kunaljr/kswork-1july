import React from "react";

const Card = ({contentImg,contentTitle,contentText}) => {
    return(
        <div className="content-slide-item">
            <div className="card">
                <div className="img">
                    <img className="card-img-top" src={contentImg} alt="content card"/>
                </div>
                <div className="card-body">
                    <h5 className="content-title">{contentTitle}</h5>
                    <p className="content-text">{contentText}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;