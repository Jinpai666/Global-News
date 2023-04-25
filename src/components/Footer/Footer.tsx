import React from 'react';
import './Footer.scss'
import CurrentTime from "../Clock/Clock";


const Footer :React.FC = () => {
    return (
        <footer className="footer">
            <div><CurrentTime/></div>
            <div> Liczba artykułów</div>
        </footer>
    );
}

export default Footer;