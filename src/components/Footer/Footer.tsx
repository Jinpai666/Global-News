import React from 'react';
import './Footer.scss'
import CurrentTime from "../Clock/Clock";
import BackToTop from "../BackToTop/BackToTop";


const Footer :React.FC = () => {
    return (
        <footer className="footer">
            <div><CurrentTime/></div>
            <div> Liczba artykułów</div>
            <BackToTop/>
        </footer>
    );
}

export default Footer;