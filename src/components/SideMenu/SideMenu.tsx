import React from 'react';
import {Link} from "react-router-dom";
import './SideMenu.scss'

const SideMenu: React.FC = () => {



    return (

                <ul className="side-menu">
                    <Link
                        className="side-menu__link"
                        to="/de"
                    >
                        <li className="side-menu__item">
                            <img className="side-menu__flag" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" alt="flaga"/> Germany
                        </li>
                    </Link>

                    <Link
                        className="side-menu__link"
                        to="/pl"
                    >
                        <li className="side-menu__item">
                            <img className="side-menu__flag" src="https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" alt="flaga"/> Poland
                        </li>
                    </Link>

                    <Link
                        className="side-menu__link"
                        to="/ua"
                    >
                        <li className="side-menu__item">
                            <img className="side-menu__flag" src="https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg" alt="flaga"/> Ukraine
                        </li>
                    </Link>

                    <Link
                        className="side-menu__link"
                        to="/us"
                    >
                        <li className="side-menu__item">
                            <img className="side-menu__flag" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="flaga"/> USA
                        </li>
                    </Link>
                </ul>

    );
};

export default SideMenu;
