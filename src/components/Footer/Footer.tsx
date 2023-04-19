import React from 'react';
import './Footer.scss'


const Footer :React.FC = () => {
    return (
        <footer className="footer">
            <div>Aktualna godzina: 00:00:00</div>
            <div> Liczba artykułów</div>
        </footer>
    );
}

export default Footer;