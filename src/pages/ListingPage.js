import React from "react";
import ContentSlider from "../components/ContentSlider";
import HeroSlider from "../components/HeroSlider";
import Base from "./Base";
import img16_9 from "./../assets/images/upskillfun-16-9-banner-account-based-marketing.jpg";
import img4_5 from "./../assets/images/upskillfun-4-5-banner-account-based-marketing.jpg";
import img4_3 from "./../assets/images/upskillfun-4-3-banner-account-based-marketing.jpg";
import HeroBannerImg from "./../assets/images/banners/upskillfun-16-5-banner-account-based-marketing.jpg";
const ListingPage= ()=>{
    
    return(
        <Base>
            <HeroSlider id="listingpage-herobanner" img={HeroBannerImg} classToChangeSize=""/>
            <ContentSlider id="recommended-content-slide1" img={img16_9} classToChangeSize="" title="Recommendet Movies For You"/>
            <ContentSlider id="recommended-content-slide2" img={img4_5} classToChangeSize="" title="Recommendet Series For You"/>
            <ContentSlider id="recommended-content-slide3" img={img4_3} classToChangeSize="" title="Recommendet Sport For You"/>
        </Base>
    )
}

export default ListingPage;