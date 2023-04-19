import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import React from "react";
import './Layout.scss'
import SideMenu from "../SideMenu/SideMenu";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>

            <main className="layout-main">
                <SideMenu/>
                <div className="layout-main__children">{children}</div>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;