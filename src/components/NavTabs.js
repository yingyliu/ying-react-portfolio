import React from 'react';
import './styles/NavTabs.css';
import Nav from 'react-bootstrap/Nav';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="#">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="#">Resume</Nav.Link>
        </Nav.Item>
      </Nav>



        // <ul className="nav nav-tabs">
        //     <li className="nav-item">
        //         <a
        //         href="#about"
        //         onClick={() => handlePageChange('About')}
        //         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
        //             About
        //         </a>
        //     </li>
        //     <li className="nav-item">
        //         <a
        //         href="#portfolio"
        //         onClick={() => handlePageChange('Portfolio')}
        //         className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
        //             Portfolio
        //         </a>
        //     </li>
        //     <li className="nav-item">
        //         <a
        //         href="#contact"
        //         onClick={() => handlePageChange('Contact')}
        //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
        //             Contact
        //         </a>
        //     </li>
        //     <li className="nav-item">
        //         <a
        //         href="#resume"
        //         onClick={() => handlePageChange('Resume')}
        //         className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
        //             Resume
        //         </a>
        //     </li>
        // </ul>
    );
}

export default NavTabs;