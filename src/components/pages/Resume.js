import React from 'react';
import cvIcon from "../assets/images/cv-icon.png";
import resume from '../assets/images/resume.png'
import '../styles/Resume.css';

function Resume() {
    return(
        <>
        <h1 className="resume-title">RESUME</h1>
        <br></br>
        <br></br>
        <div className="row justify-content-center resume-content" id="resume-doc">
            <a href={resume} download="resume.png"><img src={cvIcon} alt="cv-icon" className="cv-icon"/>Download My Resume</a>
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
        </>
    )
}

export default Resume;