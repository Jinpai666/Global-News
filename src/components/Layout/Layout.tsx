import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideMenu from "../SideMenu/SideMenu";
import BottomMenu from "../TopMenu/BottomMenu";
import { getCountries } from "../../services/getCountries";
import { countriesInNewsApi } from "../../utils/countries";
import { Country } from "../../types/country"
import "./Layout.scss"


type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        getCountries().then((r: Country[] ) => {
            const filteredCountries = r.filter((country) =>
                countriesInNewsApi.includes(country.cca2.toLowerCase())
            );
            const sortedCountries = filteredCountries.sort((a, b) => {
                const countryNameA = a.name.common;
                const countryNameB = b.name.common;
                return countryNameA.localeCompare(countryNameB);
            });

            setCountries(sortedCountries);
        });
    }, []);

    console.log("test", countries);

    return (
        <>
            <Header />

            <main className="layout-main">
                <SideMenu countries={countries} />
                <div className="layout-main__children">{children}</div>
            </main>

            <BottomMenu countries={countries} />
            <Footer />
        </>
    );
};

export default Layout;
