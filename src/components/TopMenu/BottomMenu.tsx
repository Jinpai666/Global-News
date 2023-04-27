import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './BottomMenu.scss'
import Hamburger from 'hamburger-react'

const BottomMenu: React.FC = () => {

    const [isOpen, setOpen] = useState(false)
    const handleOptionClick = () => {setOpen(false)}

    return (
        <div className="bottom-menu">
            {isOpen &&
                <div className="bottom-menu__selection">
                    <Link onClick={handleOptionClick} className="bottom-menu__link"  to="/ua">
                        <img className="bottom-menu__flag"
                             src="https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg"
                             alt="flaga"/> Ukraina
                    </Link>

                    <Link onClick={handleOptionClick} className="bottom-menu__link" to="/pl">
                        <img className="bottom-menu__flag"
                             src="https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg"
                             alt="flaga"/> Polska
                    </Link>
                    <Link onClick={handleOptionClick} className="bottom-menu__link" to="/de">
                        <img className="bottom-menu__flag"
                             src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
                             alt="flaga"/> Niemcy
                    </Link>
                    <Link  onClick={handleOptionClick} className="bottom-menu__link" to="/us">
                        <img className="bottom-menu__flag"
                             src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                             alt="flaga"/> USA
                    </Link>
                </div>
            }
            <div className="bottom-menu__bar">
                Wybór kraju

                <Hamburger toggled={isOpen} toggle={setOpen} />

            </div>
        </div>



    );
};

export default BottomMenu;
