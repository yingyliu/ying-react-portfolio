import React from "react";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import mediumIcon from "../assets/images/medium.png";
import '../styles/Footer.css';

function Footer() {


    return(
        <div className="page-footer row justify-content-center" id="footer">
            <a href="https://github.com/yingyliu" target="_blank" rel="noreferrer"><img src={githubIcon} alt="github-logo" className="social-media-icon"/></a>
            <a href="https://www.linkedin.com/in/ying-ying-l-5865a4136/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin-logo" className="social-media-icon"/></a>
            <a href="https://medium.com/@yingying.liu" target="_blank" rel="noreferrer"><img src={mediumIcon} alt="medium-logo" className="social-media-icon"/></a>
        </div>
    )
}

export default Footer;