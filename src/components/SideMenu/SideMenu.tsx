import React from 'react';
import {Link} from "react-router-dom";
import './SideMenu.scss'

const SideMenu: React.FC = () => {



    return (

                <ul className="side-menu">
                    <li>
                        <Link to="/ug">
                            Uganda
                        </Link>
                    </li>
                    <li>
                        <Link to="/pl">
                            Polska
                        </Link>
                    </li>
                    <li>
                        <Link to="/jp">
                            Japonia
                        </Link>
                    </li>
                    <li>
                        <Link to="/us">
                            USA
                        </Link>
                    </li>
                </ul>

    );
};

export default SideMenu;
