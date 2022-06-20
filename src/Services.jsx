import React from "react";
import '../node_modules/aos/dist/aos';
import ser1 from './img/ser1.jpg';
import ser2 from './img/ser2.jpg';
import ser3 from './img/ser3.jpg';
import ser4 from './img/ser4.jpg';

const Services = ()=>{
    return(
        <>
        <div class="service" id="service">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-aos="fade-up" data-aos-duration="1500">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div class="row">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s" data-aos="fade-right" data-aos-duration="1800"
                    data-aos-mirror="true">
                        <div class="service-item">
                            <div class="service-icon">
                                <img class="fa fa-laptop" src={ser1} />
                            </div>
                            <div class="service-text">
                                <h3>Web Design</h3>
                                <p>
                                   Content
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-aos="fade-left" data-aos-duration="1800">
                        <div class="service-item">
                            <div class="service-icon">
                            <img class="fa fa-laptop" src={ser2} />
                            </div>
                            <div class="service-text">
                                <h3>Web Development</h3>
                                <p>
                                    Content
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-aos="fade-right" data-aos-duration="2000">
                        <div class="service-item">
                            <div class="service-icon">
                            <img class="fa fa-laptop" src={ser3} />
                            </div>
                            <div class="service-text">
                                <h3>Apps Design</h3>
                                <p>
                                    Content
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s" data-aos="fade-left" data-aos-duration="2000">
                        <div class="service-item">
                            <div class="service-icon">
                            <img class="fa fa-laptop" src={ser4} />
                            </div>
                            <div class="service-text">
                                <h3>Banner Design</h3>
                                <p>
                                    Content
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;