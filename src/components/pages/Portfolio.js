import React from 'react';
import githubicon from "../assets/images/github.png";
import '../styles/Portfolio.css';

function ProjectsList () {
    return(
        <section>
            <h1>Portfolio</h1>
            <ul className='projects-images'>
                 <li>
                    <div className='d-flex projects-display'>
                    <h2>Artaholic</h2>
                    <a href="https://github.com/Dempleon/artaholic" target="_blank"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>newbieBay</h2>
                    <a href="https://darxmarx.github.io/california-bay-area-guide/" target="_blank"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Work day Scheduler</h2>
                    <a href="https://yingyliu.github.io/work-day-scheduler/" target="_blank"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Weather Dashboard</h2>
                    <a href="https://yingyliu.github.io/weather-dashboard/" target="_blank"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Code Quiz</h2>
                    <a href="https://yingyliu.github.io/code-quiz/" target="_blank"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Note Taker</h2>
                    <a href="https://yingyliu.github.io/note-taker/" target="_blank"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
            </ul>
        </section>
        
    )
}

export default ProjectsList;