import React, { useEffect } from "react";
import hero from './img/heros1.jpeg';
import AOS, { init } from "aos";
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';

const Home = ()=>{
    useEffect(()=>{
        AOS.init();
    },[]);

    return(
        <>
        <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center ">
                    <div className="col-12 col-md-6" >
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Abrar Shaikh</h1>
                                <h2 className="typed-text"></h2>
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href="">Hire Me</a>
                                <a className="btn" href="">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6" data-aos="fade-left" data-aos-duration="3000"
                    data-aos-delay="180">
                        <div className="hero-image">
                            <img src={hero} alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;