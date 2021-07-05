import React from "react";
import addv from "./../assets/images/advertisment/addv.gif";

const Advertisment = () => {
    return(
        <section id="advertisment">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <small>Sponsored by</small>
                    <img src={addv} width="100%"/>
                </div>
                <div className="col-md-4">
                    <small>Sponsored by</small>
                    <img src={addv} width="100%"/>
                </div>
                <div className="col-md-4">
                    <small>Sponsored by</small>
                    <img src={addv} width="100%"/>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Advertisment;