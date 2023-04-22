
import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/about.jpg"
import React2 from "../assets/image5.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1> Who A'm I ?</h1>
      <p> I'm a react front-end developer,
        I create responsive secure websites
      </p>
      <Link to="/Contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
       <div className="img-container">
        <div className="img-stack top">
          <img src={React1}  className="img" alt="About image" />
        </div>
        <div className="img-stack bottom">
          <img src={React2}  className="img" alt="About image" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default AboutContent