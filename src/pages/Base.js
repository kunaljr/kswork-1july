import React from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import "./../assets/styles/css/style.css";
const Base = ({
    children
}) =>{
    return(
        <div id="wrapper">
            <Header/>
                <main>{children}</main>  
            <Footer/>          
        </div>
    )
}

export default Base;