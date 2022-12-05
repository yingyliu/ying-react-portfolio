import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from '/page/Contact';
import Resume from '/page/Resume';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    
    const renderPage = () => {
        if(currentPage === 'About') {
            return <About/>;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if(currentPage === 'Contact') {
            return <Contact/>
        }
        return <Resume/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}

export default PortfolioContainer;