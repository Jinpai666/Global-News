import React from 'react';
import './Footer.scss'
import CurrentTime from "../Clock/Clock";
import BackToTop from "../BackToTop/BackToTop";
import { useSelector } from "react-redux";


const Footer :React.FC = () => {
    const articleCount = useSelector((state: { totalArticles: number }) => state.totalArticles);

    console.log('articleCount',articleCount)

    return (
        <footer className="footer">
            <div><CurrentTime/></div>
            <div> Article count: {articleCount}</div>
            <BackToTop/>
        </footer>
    );
}

export default Footer;