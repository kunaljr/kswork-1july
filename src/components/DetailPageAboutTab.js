import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faChevronDown, faClock, faFileCode, faGlobe, faShareSquare, faUsers } from "@fortawesome/free-solid-svg-icons";
import img4_3 from "./../assets/images/upskillfun-4-3-banner-account-based-marketing.jpg";
import DetailPage4Slide from "./sliders/DetailPage4Slide";
import team2 from "./../assets/images/team/team-2.jpg"
import team3 from "./../assets/images/team/team-3.jpg"
import team4 from "./../assets/images/team/team-4.jpg"
const DetailPageAboutTab = () => {

     const showMoreSpecializationInfo = () => {
        var dots=document.getElementById("specialization-info-dots")
        var moreText = document.getElementById("specialization-info-more")
        var btnText = document.getElementById("show-more-specialization-info")

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read More <i class='fas fa-chevron-down'></i>";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read Less <i class='fas fa-chevron-up'></i>";
            moreText.style.display = "inline";
        }
    }

    return(
        <div className="tab-pane fade show active" id="about-content-panel" role="tabpanel" aria-labelledby="about-content-tab">
            <div className="about-content-specialization">
                        <h1>About This Specialization</h1>
                        <p>This Course will introduce you to Amazon Web Services(AWS) 
                            serverless architecture. Through demonstration on hands-on 
                            exercises. This Course will introduce you to Amazon Web 
                            Services(AWS) serverless architecture. Through demonstration on 
                            hands-on exercises.
                            <span id="specialization-info-dots">...</span><span id="specialization-info-more">
                            This Course will introduce you to Amazon Web Services(AWS) serverless architecture. Through demonstration on hands-on exercises.
                            This Course will introduce you to Amazon Web Services(AWS) serverless architecture. Through demonstration on hands-on exercises. 
                            This Course will introduce you to Amazon Web Services(AWS) serverless architecture. Through demonstration on hands-on exercises.    
                            </span>    
                        </p>
                        <p className="text-center"> <a id="show-more-specialization-info" onClick={showMoreSpecializationInfo}>Read More <FontAwesomeIcon icon={faChevronDown}/></a></p>

                        <DetailPage4Slide title="WHAT YOU WILL LEARN"/>
                        <div className="skills-youl-gain">
                            <h6>SKILLS YOU WILL GAIN</h6>
                            <ul>
                                <li>
                                    <span className="badge rounded-pill ">
                                        Cloud Computing Security
                                    </span>
                                </li>
                                <li>
                                    <span className="badge rounded-pill ">
                                        AWS Cloud
                                    </span>
                                </li>
                                <li>
                                    <span className="badge rounded-pill ">
                                        Cloud Storage
                                    </span>
                                </li>
                                <li>
                                    <span className="badge rounded-pill ">
                                        Cloud Networking
                                    </span>
                                </li>
                                <li>
                                    <span className="badge rounded-pill ">
                                        Cloud Computing 
                                    </span>
                                </li>
                                <li>
                                    <span className="badge rounded-pill ">
                                        aws
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <DetailPage4Slide title="Students Testimonial"/>
                    </div> 
            <div className="content-benefits-and-team">
                        <div className="course-details-benefits">
                            <ul>
                                <li>
                                    <FontAwesomeIcon className="i" icon={faShareSquare}/>
                                    <div>
                                        <h2>Sharable certificate</h2>
                                        <p>Earn a certificate upon Completion</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="i" icon={faGlobe}/>
                                    <div>
                                        <h2>100% Online Courses</h2>
                                        <p>Start Instantly and learn at your own Schedule</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="i" icon={faClock}/>
                                    <div>
                                        <h2>Flexible Schedule</h2>
                                        <p>Set and Maintain Flexible Schedule.</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="i" icon={faFileCode}/>
                                    <div>
                                        <h2>Begginer Level</h2>
                                        <p>No prior Knowledge Require.</p>
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon className="i" icon={faCalendarCheck}/>
                                    <div>
                                        <h2>Approx. 5 months to Complete</h2>
                                        <p>Suggested 2 hourse/week.</p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    
                        <div className="team-behind-course">
                            <h5><FontAwesomeIcon icon={faUsers}/> Team Behind this Course</h5>
                            <ul className="list-unstyled esm">
                                    <li>
                                        <img className="rounded-circle" src={team2} 
                                            alt="Team Member" 
                                             height="90"/>
                                            
                                        <div>
                                            <h6>Allen Goldenberg</h6>
                                            <p>Motivational Speaker <br/></p>
                                        </div>
                                    </li>
                                    <li>
                                        <img className="rounded-circle" src={team3} 
                                        alt="Team Member" height="90"/>
                                        <div>
                                            <h6>Rupa Ganguly</h6>
                                            <p>Advisor <br/></p>
                                                
                                        </div>
                                    </li>
                                    <li>
                                        <img className="rounded-circle" src={team4} alt="Team Member"
                                        height="90"/>
                                        <div>
                                            <h6>Sam Washington</h6>
                                            <p>Teacher<br/></p>
                                        </div>
                                    </li>
                                </ul>    
                        </div>
                    </div>
        </div>
    )
}

export default DetailPageAboutTab;