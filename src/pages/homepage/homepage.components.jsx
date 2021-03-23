import React from 'react';
import Directory from '../../components/directory/directory.components'
import './homepage.style.scss';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <Directory />
            </div>
        </div>
    )
}

export default Homepage;