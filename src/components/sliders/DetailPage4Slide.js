import react from "react";
import Slider from "react-slick";
import Card from "../cards/Card";
import img from "./../../assets/images/upskillfun-4-3-banner-account-based-marketing.jpg"


const DetailPage4Slide = ({title}) => {

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
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
            dots: false
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
    for(var i=0; i<=6;i++){
        slides.push(<Card contentImg={img} contentTitle="ABC Course Sample 01" contentText="introduction to ABM"/>)
    }

    return(
        <div>
          <h3>{title}</h3>        
        <Slider {...settings}>
            {slides}
        </Slider>
        </div>
    )
}

export default DetailPage4Slide;