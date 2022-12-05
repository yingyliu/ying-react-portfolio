import React from "react";
import githubicon from "../assets/images/github.png";
import '../styles/Footer.css';

function Footer() {
    return(
        <div className="page-footer row justify-content-center" id="footer">
            <a href="https://github.com/yingyliu"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
            <a href="https://www.linkedin.com/in/ying-ying-l-5865a4136/"><img src="fa-brands fa-linkedin" alt="linkedin-logo" className="icon"/></a>
            <a href="https://medium.com/@yingying.liu"><img src="fa-brands fa-medium" alt="medium-logo" className="icon"/></a>
        </div>
    )
}

export default Footer;