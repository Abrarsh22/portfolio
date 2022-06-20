import React from "react";
import aboutjpg from "./img/about.jpg"

const Footer = ()=>{
    return(
        <>
        <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container-fluid">
                <div class="container">
                    <div class="footer-info">
                        <h2>Abrar Shaikh</h2>
                        <h3>123 Street, Mumbai, India</h3>
                        <div class="footer-menu">
                            <p>+91 8779147253</p>
                            <p>abrarshaikhs1234@gmail.com</p>
                        </div>
                        <div class="footer-social">
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                            <a href=""><i class="fab fa-youtube"></i></a>
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="container copyright">
                    <p>&copy; <a href="#">MyPortfolio</a>, All Right Reserved | Designed By <b><u>Abrar</u></b> </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;