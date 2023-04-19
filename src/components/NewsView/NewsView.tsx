import React, {useEffect, useState} from 'react';
import './NewsView.scss';
import {getNews} from '../../services/getNews';
import {Article} from '../../types/types'
import ArticleCard from '../ArticleCard/ArticleCard'
import {useSelector} from "react-redux";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import {Link, useParams} from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";

const NewsView: React.FC = () => {
    const sortAsTiles = useSelector((state: { sortAsTiles: { value: boolean } }) => state.sortAsTiles.value);
    const [articles, setArticles] = useState<Article[]>([]);
    const {countryCode} = useParams() ;


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

export default NewsView;
