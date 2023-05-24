import React from 'react';
import {Link} from "react-router-dom";
import './SideMenu.scss'
import { MenuProps } from "../../types/country";


const SideMenu: React.FC<MenuProps> = ({countries}) => {

        return (

                <ul className="side-menu">
                    {countries.map((country, idx) => (
                        <Link
                            key={idx}
                            className="side-menu__link"
                            to={"/" + country.cca2}
                        >
                            <li className="side-menu__item">
                                <img className="side-menu__flag" src={country.flags.svg} alt="flaga"/> {country.name.common}
                            </li>
                        </Link>
                    ))}


                </ul>

    );
};

export default SideMenu;
