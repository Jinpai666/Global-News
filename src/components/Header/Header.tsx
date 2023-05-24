import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { handleSortClick } from '../../features/sort'
import { FaThList } from 'react-icons/fa';
import { FaThLarge } from 'react-icons/fa';
import './Header.scss'

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const sortAsTiles = useSelector((state: { sortAsTiles: { value: boolean } }) => state.sortAsTiles.value);


    return (
        <header id="header" className='header'>
            <a  className="header__link" href="/">
                <h2 className="header__logo">global<span className="header__logo_right">News</span></h2>
            </a>

            <div className="header__buttons">

                {sortAsTiles &&   <div
                    onClick={() => {
                        dispatch(handleSortClick(false));
                    }}
                >Sortuj jako lista <FaThList />
                </div>}

                {!sortAsTiles &&    <div
                    onClick={() => {
                        dispatch(handleSortClick(true));
                    }}
                >Sortuj jako kafelki  <FaThLarge/>
                </div>}

            </div>
        </header>
    );
}

export default Header;
