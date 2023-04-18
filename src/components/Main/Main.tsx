import React, {useEffect, useState} from 'react';
import './Main.scss';
import {getNews} from '../../services/getNews';
import {Article} from '../../types/types'
import ArticleCard from '../ArticleCard/ArticleCard'
import {useSelector} from "react-redux";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import {Link, useParams} from "react-router-dom";

const Main: React.FC = () => {
    const sortAsTiles = useSelector((state: { sortAsTiles: { value: boolean } }) => state.sortAsTiles.value);
    const [articles, setArticles] = useState<Article[]>([]);
    const {countryCode} = useParams()


    useEffect(() => {

        const fetchData = async () => {
            const response = await getNews(countryCode);
            setArticles(response);
            console.log(response)
        };
        fetchData();
    }, [countryCode]);


    return (
        <div className="main">
            <div className="main__side-menu">
                <ul>
                    <li>
                        <Link to="/pl">
                            Polska
                        </Link>
                    </li>
                    <li>
                        <Link to="/jp">
                            Japonia
                        </Link>
                    </li>
                    <li>
                        <Link to="/us">
                            USA
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${sortAsTiles ? "main__content_tiles" : "main__content_list"} main__content`}>
                {sortAsTiles
                    ? articles.map((article, idx) => (
                        <ArticleCard key={idx} article={article}/>
                    ))
                    : articles.map((article, idx) => (
                        <ArticleListItem key={idx} article={article}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Main;
