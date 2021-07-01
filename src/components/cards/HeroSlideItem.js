import React from "react";
import HeroBannerPlayBtn from "../buttons/HeroBannerPlayBtn";

const HeroSlideItem = ({className,img,title,subtitle,btnname}) =>{
    return(
        <div className="slider-item">
            <img src={img} width="99.8%"/>
            <div class="slider-item-content">
                <h1>{title}</h1>
                <ul class="slider-item-genre-list">
                    <li>Science</li>
                    <li>Digital</li>
                </ul>
                <HeroBannerPlayBtn btnname={btnname}/>        
            </div>
        </div>
    )
}

export default HeroSlideItem;