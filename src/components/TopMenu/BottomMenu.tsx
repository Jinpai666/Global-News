import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './BottomMenu.scss'
import Hamburger from 'hamburger-react'
import { MenuProps } from "../../types/country";



const BottomMenu: React.FC<MenuProps> = ({countries}) => {

    const [isOpen, setOpen] = useState(false)
    const handleOptionClick = () => {
        setOpen(false)
    }

    return (
        <div className="bottom-menu">
            {isOpen &&

                <div className="bottom-menu__selection">
                    <ul className="bottom-menu__countries">
                        {countries.map((country, idx) => (
                            <li>
                                <Link
                                    key={idx}
                                    onClick={handleOptionClick}
                                    className="bottom-menu__link"
                                    to={"/" + country.cca2}
                                >
                                    <img
                                        className="bottom-menu__flag"
                                        src={country.flags.svg}
                                        alt="flaga"
                                    />
                                    <p>{country.name.common}</p>

                                </Link>
                            </li>
                        ))
                        }
                    </ul>


                </div>
            }

            <div className="bottom-menu__bar">
                Wybór kraju
                <Hamburger toggled={isOpen} toggle={setOpen}/>
            </div>
        </div>


    );
};

export default BottomMenu;
