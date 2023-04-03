import React from 'react';
import './Header.scss'
const Header :React.FC = () => {
    return (
        <div className='header'>
            <div className='header__logo'/>
            <h1>Global News</h1>
            <div className="header-buttons">
                <div>Sortowanie</div>
                <div>More</div>
            </div>
        </div>
    );
}

export default Header;