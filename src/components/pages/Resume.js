import React from 'react';
// import { Col } from 'react-bootstrap';
import cvIcon from "../assets/images/cv-icon.png";
import '../styles/Resume.css';

function Resume() {
    return(
        <>
        <h1 className="resume-title">RESUME</h1>
        {/* <Col lg={6} md={12}> */}
        <br></br>
        <br></br>
        <div className="row justify-content-center resume-content" id="resume-doc">
            {/* <a href="https://docs.google.com/document/d/1i7i2z1oRVMucqhT1F_uVyma6RKXBEateIcN1r1TGKOc/edit?usp=sharing" target="_blank"><img src={cvIcon} alt="cv-icon" className="cv-icon"/></a> */}
            <a href=" " download="resume.png"><img src={cvIcon} alt="cv-icon" className="cv-icon"/>Download My Resume</a>
        </div>
        <br></br>
        <br></br>
        <div className="resume-content">
            <h2 className="resume">FRONT END PROFICIENCIES</h2>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    React.js
                </li>
                <li>
                    Responsicve Web Design
                </li>
            </ul>
            <br></br>
            <br></br>
            <h2 className="resume">BACK END PROFICIENCIES</h2>
            <ul>
                <li>
                    Node.js
                </li>
                <li>
                    Express.js
                </li>
                <li>
                    MySQL
                </li>
                <li>
                    NoSQL (MongoDB, Mongoose)
                </li>
                <li>
                    API (web, third-party, RESTful, server-side)
                </li>
            </ul>

        

        </div>
        {/* </Col> */}
        </>
    )
}

export default Resume;