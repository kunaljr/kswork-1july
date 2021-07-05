import React from "react";
import DetailPageHeroBanner from "../components/banners/DetailPageHeroBanner";
import DetailPageInfoSection from "../components/DetailPageInfoSection";
import ContentSlider from "../components/ContentSlider";
import img4_3 from "./../assets/images/upskillfun-4-3-banner-account-based-marketing.jpg";
import Base from "./Base";
import Advertisment from "../components/Advertisment";


const DetailPage = () =>{
    return(
        <Base>
            <DetailPageHeroBanner/>
            <DetailPageInfoSection/>
            <Advertisment/>
            <ContentSlider id="recommended-content-slide2" img={img4_3} classToChangeSize="" title="Recommendet For You"/>
            
        </Base>
    )
}

export default DetailPage