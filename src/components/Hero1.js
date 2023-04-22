import "./HeroImage1.css"
import React from 'react';
import introImg from "../assets/image4.jpg"
import { Link } from "react-router-dom";


const Hero1 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src= { introImg} alt="IntroImage"/>
      </div>
      <div className="content">
        <p>HI I'M ERASTUS </p>
        <h1>React Developer</h1>
        <div >
        <Link to="/Project" className="btn">Projects </Link> 
        <Link to="/Contact" className="btn btn-light">Contacts </Link> 
      </div>
      </div>
    </div>
  )
}

export default Hero1;