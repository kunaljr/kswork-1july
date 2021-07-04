import React from "react";
import heroBanner from "./../../assets/images/banners/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock, faClock, faStar, faStarHalfAlt,faRupeeSign, faBookmark, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import ContentButton from "../buttons/ContentButton";
import SampleContentBtn from "../buttons/SampleContentBtn";
import ContentBuyBtn from "../buttons/ContentBuyBtn";
import { Link } from "react-router-dom";



const DetailPageHeroBanner = () => {
    return(
        <div id="detail-page-hero-banner">
            <div className="container-fluid">
                <div className="banner-img">
                    <img className="img" src={heroBanner} width="100%" height="100%" alt="hero-banner"/>
                </div>
                <div className="banner-details">
                    <ul className="banner-links">
                        <li>Browse</li>
                        <li>Starters</li>
                        <li>Marketing & Finance</li>
                    </ul>

                    <h1 className="content-title">Account Based Marketing - Advanced <FontAwesomeIcon 
                    icon={faUserLock}/></h1>

                    <ul className="duration-and-rating-list">
                        <li>
                            <FontAwesomeIcon icon={faClock}/> 20 Hours 20 Minute
                        </li>
                        <li>
                            4.5 <FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStarHalfAlt}/>
                        </li>
                    </ul>

                    <ul className="detail-page-banner-buttons">
                        <li><ContentButton/></li>
                        <li><SampleContentBtn/></li>
                    </ul>

                    <ul className="content-buy-btn-list">
                        <li><ContentBuyBtn content="Buy Now for 4999" icon="faRupeeSign"/></li>
                        <li><ContentBuyBtn content="Subscribe Now"/></li>
                    </ul>

                    <ul className="share-and-bookmark-list">
                        <li>
                            <Link className="a" to="/"><FontAwesomeIcon icon={faBookmark}/> BookMark</Link>
                        </li>
                        <li><Link className="a" to="/"><FontAwesomeIcon icon={faHeart}/> Add to Favourite</Link></li>
                        <li><Link className="a" to="/"><FontAwesomeIcon icon={faShare}/> Share</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailPageHeroBanner;