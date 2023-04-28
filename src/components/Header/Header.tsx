import React from 'react';
import { useDispatch } from "react-redux";
import { handleSortClick } from '../../features/sort'

import './Header.scss'

const Header: React.FC = () => {
    const dispatch = useDispatch();


    return (
        <header id="header" className='header'>
            <a  className="header__link" href="/">
                <h1 className="header__logo">global<span className="header__logo_right">News</span></h1>
            </a>

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
