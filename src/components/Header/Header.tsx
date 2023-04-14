import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { handleSortClick } from '../../features/sort'

import './Header.scss'

const Header: React.FC = () => {
    const dispatch = useDispatch();


    return (
        <div className='header'>
            <div className='header__logo'/>
            <h1>Global News</h1>
            <div className="header__buttons">
                <div
                    onClick={() => {
                        dispatch(handleSortClick());
                    }}
                >Sortowanie</div>
                <div>More</div>
            </div>
        </div>
    );
}

export default Header;
