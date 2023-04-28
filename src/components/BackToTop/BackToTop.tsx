import React, {useEffect, useState} from 'react';
import './BackToTop.scss'

function BackToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    },[])

    const scrollUp  = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        })
    }


    return (
        <div>
            {   backToTopButton &&
                <div onClick={scrollUp} className="back-to-top"/>
            }

        </div>

    );
}

export default BackToTop;