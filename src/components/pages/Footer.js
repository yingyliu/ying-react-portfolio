import React from "react";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import mediumIcon from "../assets/images/medium.png";
import { Col } from 'react-bootstrap';
import '../styles/Footer.css';

function Footer() {
    // const styles = {
    //     all:{
    //         background: 'mistyrose',
    //     }
    // }

    return(
        <div className="page-footer row justify-content-center" id="footer">
            <Col lg={6} md={12}>
            <a href="https://github.com/yingyliu" target="_blank"><img src={githubIcon} alt="github-logo" className="social-media-icon"/></a>
            <a href="https://www.linkedin.com/in/ying-ying-l-5865a4136/" target="_blank"><img src={linkedinIcon} alt="linkedin-logo" className="social-media-icon"/></a>
            <a href="https://medium.com/@yingying.liu" target="_blank"><img src={mediumIcon} alt="medium-logo" className="social-media-icon"/></a>
            </Col>
        </div>
    )
}

export default Footer;