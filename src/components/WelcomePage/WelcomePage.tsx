import React from 'react';
import './WelcomePage.scss'

const WelcomePage: React.FC = () => {



    return (
        <div className="welcome" >
            <h2 className="welcome__logo">
               global<span className="welcome__accent">News</span>
            </h2>
            <p className="welcome__text welcome__text_large">Źródło informacji ze świata.</p>
            <p className="welcome__text welcome__text_small">Wybierz kraj aby zacząć.</p>
        </div>


    );
};

export default WelcomePage;
