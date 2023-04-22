import "./FooterStyles.css";
import React from 'react';
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20}style={{color:"#fff",marginRight: "2rem"}}/>
            <div>
            <p>Eldoret,RiftValley</p>
            <p> Kenya</p>
          </div>
          </div>
          <div className="phone">
            <h4>
            <FaPhone size={20}style={{color:"#fff",marginRight: "2rem"}}/>
             +254791425015
            </h4>
          </div>
          <div className="email">
            <h4>
            <FaMailBulk size={20}style={{color:"#fff",marginRight: "2rem"}}/>
             erastuskorir494@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About My Proffesion</h4>
            <p> This is Erastus Korir, the software Engineer,
              I enjoy discussing new projects and design challenges
            </p>
            <div className="social">
            <FaFacebook size={30}style={{color:"#fff",marginRight: "1rem"}}/>
            <FaTwitter size={20}style={{color:"#fff",marginRight: "2rem"}}/>
            <FaLinkedin size={20}style={{color:"#fff",marginRight: "2rem"}}/>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;