import React from "react";
import Slider from "react-slick";
import Card from "./cards/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ContentSlider = ({id,img,sliderClassName,title}) =>{

    const newNextArrow = (props)=>{
      const { className,onClick} = props;
      return(
        <div
        className={className}
        onClick={onClick}
        >
        <FontAwesomeIcon icon={faChevronLeft} color="#000" size="2x"/>
        </div>
      )
    }

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <newNextArrow />,
      className:"recommended-content-list",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]}

    var slides=[];
    for(var i=0; i<=8;i++){
        slides.push(<Card contentImg={img} contentTitle="ABC Course Sample 01" contentText="introduction to ABM"/>)
    }

    return(
        <section id={id}>
            <div className="container-fluid">
                <h1>{title}</h1>
                <Slider {...settings}>
                    {slides}
                </Slider>
            </div>
        </section>
    )
}

export default ContentSlider;