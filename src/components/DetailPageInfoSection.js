
import React from "react";
import DetailPageLessons from "./DetailPageLessons";
import DetailPageSecondNav from "./nav/DetailPageSecondNav";

import DetailPageAboutTab from "./DetailPageAboutTab";



const DetailPageInfoSection = () => {

   
    return(
        <section>
            <DetailPageSecondNav/>
            <div className="tab-content">
                <DetailPageAboutTab/>
                <DetailPageLessons/>
            </div>

        </section>
       

    )
}

export default DetailPageInfoSection;