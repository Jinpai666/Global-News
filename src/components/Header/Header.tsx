import React from 'react';
import { useDispatch } from "react-redux";
import { handleSortClick } from '../../features/sort'

import './Header.scss'

const Header: React.FC = () => {
    const dispatch = useDispatch();


    return (
        <header id="header" className='header'>
            <a href="/">
                <div className='header__logo'/>
            </a>
            <h1 className='header__title'>Global News</h1>
            <div className="header__buttons">
                <div
                    onClick={() => {
                        dispatch(handleSortClick());
                    }}
                >Sortowanie</div>
                <div>More</div>
            </div>
        </header>
    );
}

export default Header;
