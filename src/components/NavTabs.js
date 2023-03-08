import React from 'react';
import Nav from 'react-bootstrap/Nav';



function NavTabs({ currentPage, handlePageChange }) {
    return (
        <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link onClick={() =>handlePageChange("About")}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() =>handlePageChange("Portfolio")}>Portfolio</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link onClick={() =>handlePageChange("Contact")}>Contact</Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
            <Nav.Link onClick={() =>handlePageChange("Resume")}>Resume</Nav.Link>
        </Nav.Item>
      </Nav>
    );
}

export default NavTabs;