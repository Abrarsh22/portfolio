import React from 'react'


const Navbar=({filterItem,menuList})=>{
    return(
        <div class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-header text-center wow 
                " data-wow-delay="0.1s" data-aos="fade-up" data-aos-duration="1500">
                    <p>My Portfolio</p>
                    <h2>My Excellent Portfolio</h2>
                </div>
                <div class="row">
                    <div class="col-12" data-aos="zoom-in" data-aos-duration="1500">
                        <ul id="portfolio-filter" >
                        {
                            menuList.map((curElem)=>{
                                return(
                                    <li onClick={()=>filterItem(curElem)}>{curElem}</li>
                                        ); 
                            })}
                        </ul>
                    </div>
                </div>
      
        </div>
        </div>
    )
}

export default Navbar