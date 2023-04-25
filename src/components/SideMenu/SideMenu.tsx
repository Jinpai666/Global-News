import React from 'react';
import {Link} from "react-router-dom";
import './SideMenu.scss'

const SideMenu: React.FC = () => {



    return (

                <ul className="side-menu">
                    <Link className="side-menu__link"  to="/ug">
                        <li className="side-menu__item">
                            Uganda
                        </li>
                    </Link>

                    <Link className="side-menu__link"  to="/pl">
                        <li className="side-menu__item">
                            Polska
                        </li>
                    </Link>
                    <Link className="side-menu__link"  to="/de">
                        <li className="side-menu__item">
                            Niemcy
                        </li>
                    </Link>
                    <Link className="side-menu__link"  to="/us">
                        <li className="side-menu__item">
                            USA
                        </li>
                    </Link>
                </ul>

    );
};

export default SideMenu;
