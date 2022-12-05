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
                    <h2>Password Generator</h2>
                    <a href="https://yingyliu.github.io/password-generator/"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Password Generator</h2>
                    <a href="https://yingyliu.github.io/password-generator/"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Password Generator</h2>
                    <a href="https://yingyliu.github.io/password-generator/"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
                <li>
                    <div className='d-flex projects-display'>
                    <h2>Password Generator</h2>
                    <a href="https://yingyliu.github.io/password-generator/"><img src={githubicon} alt="github-logo" className="social-media-icon"/></a>
                    </div>
                </li>
            </ul>
        </section>
        
    )
}

// function ProjectsList () {
//     return [
//         {
//             name: 'Password Generator',
//             category: 'projects',
//             description: 'User can use this site genereating random password.',
//             url: 'https://yingyliu.github.io/password-generator/',
//             githubURL: 'https://github.com/yingyliu/password-generator'
//         },
//         {
//             name: 'Work day Scheduler',
//             category: 'projects',
//             description: 'User can use this site recording their 9am-5pm schedule.',
//             url: 'https://yingyliu.github.io/work-day-scheduler/',
//             githubURL: 'https://github.com/yingyliu/work-day-scheduler'
//         }, 
//         {
//             name: 'Weather Dashboard',
//             category: 'projects',
//             description: 'User can use this site searching for weather forcast of a specific city.',
//             url: 'https://yingyliu.github.io/work-day-scheduler/',
//             githubURL: 'https://github.com/yingyliu/work-day-scheduler'
//         },
//         {
        
//             name: 'Note Taker',
//             category: 'projects',
//             description: 'User can use this site to make their own note.',
//             url: 'https://note-taker-yingyliu.herokuapp.com/',
//             githubURL: 'https://github.com/yingyliu/note-taker'
            
//         },
//         {
//             name: 'newbieBay',
//             category: 'projects',
//             description: 'A handy, intuitive website that grants users a number of resources suited for life in California bay area.',
//             url: 'https://darxmarx.github.io/california-bay-area-guide/',
//             githubURL: 'https://github.com/Darxmarx/california-bay-area-guide'
//         }
//     ]
// }

export default ProjectsList;