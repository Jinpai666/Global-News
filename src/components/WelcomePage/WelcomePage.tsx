import React from 'react';
import './WelcomePage.scss'

const WelcomePage: React.FC = () => {


    return (
        <div className="welcome" >
            <h2 className="welcome__logo">
               global<span className="welcome__accent">News</span>
            </h2>
            <p className="welcome__text welcome__text_large">Your source for global information</p>
            <p className="welcome__text welcome__text_small">Select a country to get started.</p>
        </div>


    );
};

export default WelcomePage;
