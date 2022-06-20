import React, { useState } from "react";
import './index.css';
import Data from './Portfoliodata';

const Cards = ({menu}) =>{

    return(
        <>
        <div class="portfolio" id="portfolio">
            <div class="container">  
            <div class="row portfolio-container">
                    
        {menu.map((curElem) => {
            const {id,name,image,price,category,desc}=curElem;
            return(
                <> 
                <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">           
                        <div class="portfolio-wrap">
                            <div class="portfolio-img">
                            <img src={image} alt='Random image'/>
                            </div>
                            <div class="portfolio-text">
                                <h3>{name}-Rs.{price}</h3>
                                <a class="btn" href={image} data-lightbox="portfolio">+</a>
                            </div>
                        </div>
                        </div>
            </>
            )
        })}
        </div>
        </div>
        </div>
        </>
    )
}

export default Cards