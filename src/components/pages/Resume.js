import React from 'react';

function Resume() {
    return(
        <>
        <h1 className="resume">RESUME</h1>
        <div class="resume-doc">
            <a href="https://docs.google.com/document/d/1i7i2z1oRVMucqhT1F_uVyma6RKXBEateIcN1r1TGKOc/edit?usp=sharing" target="_blank">Resume</a>
        </div>
        <div class="resume-content">
            <h2 class="resume">FRONT END PROFICIENCIES</h2>
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



            <h2 class="resume">BACK END PROFICIENCIES</h2>
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