import "./HeroImage2Style.css";
import React, { Component } from 'react';
//import introImg2 from '../assets/about.jpg'

class HeroImage2  extends Component{
  render(){
  return (
    <div className="heroImage">
      
      <div className="heading">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    </div>
  )
}
}

export default HeroImage2;