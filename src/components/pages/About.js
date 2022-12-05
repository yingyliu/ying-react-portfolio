import React from 'react';
import { Col } from 'react-bootstrap';
import Myphoto from '../assets/images/ying-profile-photo.jpeg';

function About() {
    return(
        <section className="title">
            <div className="row justify-content-center" id="about-container">
            <Col lg={6} md={12}>
            <center><img src={Myphoto} className="my-pic" alt="ying-ying"/></center>
            <p class="name">Ying Ying Liu</p>
            <p class="job">Full Stack Web Developer</p>
            <h2 className="about-me">About Me</h2>
                <p>
                Hello, I'm Ying Ying! I want to change my expertise from Accounting to a full-stack developer.
                <br></br>
                <br></br>
                I like creative things and design since it represents one’s style and characteristics. During these three months in Bootcamp, not only I’ve learned how to set up front-end and back-end for websites, furthermore, it will help enterprises and people who need their own website/portfolio. I firmly believe that more potential customers will reach out to them from their website. 
                <br></br>
                <br></br>
                From my past working experiences, the most important skills I had learned are communication skills and being a good listener. Understanding what customers need and keeping good relationship are very important to the company.
                <br></br>
                <br></br>
                I believe my past working experiences and my expertise in full-stack development can contribute to and make an impact on your company.
                </p>
            </Col>
            </div>
        </section>
    )
}

export default About;