import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";
 
export default class App extends Component {
  render() {
    return (
      <BackToTop
        showAt={50}
        speed={1500}
        easing="easeInOutQuint"
        style={{ color:"white",background:"linear-gradient(rgb(238, 163, 23), rgba(239, 35, 60, .95))",padding:10 }}
      >
        <h6 style={{fontSize:"22px"}}>^</h6>
      </BackToTop>
    );
  }
}