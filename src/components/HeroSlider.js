import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeroSlideItem from "./cards/HeroSlideItem";
const HeroSlider = ({id,img,classToChangeSize}) =>{

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:1,
      slidesToScroll:1,
      arrows:true,
      centerMode:true,
      className:"listing-page-herobanner-slider",
    };

    return(
        <section id={id}>
            <Slider {...settings}>
              <HeroSlideItem img={img} title="Accounting and Marketing" subtitle="" btnname="play"/>
              <HeroSlideItem img={img} title="Data Science" subtitle="" btnname="play"/>
              <HeroSlideItem img={img} title="ActEnact" subtitle="" btnname="play"/>
            </Slider>
        </section>
    )
}

export default HeroSlider;