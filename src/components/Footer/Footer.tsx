import React from 'react';
import './Footer.scss'


const Footer :React.FC = () => {
    return (
        <div className="footer">
            <div>Aktualna godzina: 00:00:00</div>
            <div> Liczba artykułów</div>
        </div>
    );
}

export default Footer;