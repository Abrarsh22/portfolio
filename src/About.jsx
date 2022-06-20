import React from "react";
import aboutjpg from "./img/about.jpg"

const About = ()=>{
    return(
        <>
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12 aos-item" data-aos="fade-right" data-aos-duration="2000"
                    data-aos-mirror="true">
                        <div className="about-img">
                            <img src={aboutjpg} alt="Image" className="big"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-12" data-aos="fade-left" data-aos-duration="2200"
                    data-aos-mirror="true">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>6 Years Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Experinces In the field
                                </p>
                            </div> 
                            <div className="skills">
                                <div className="skill-name">
                                    <p>Web Design</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="skill-name">
                                    <p>Web Development</p><p>95%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar1" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="skill-name">
                                    <p>Apps Design</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar2" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                    ></div>
                                </div>
                                <div className="skill-name">
                                    <p>Apps Development</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default About;