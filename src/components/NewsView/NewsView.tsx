import React, {useEffect, useState} from 'react';
import './NewsView.scss';
import {getNews, getNextNews} from '../../services/getNews';
import {Article} from '../../types/types'
import ArticleCard from '../ArticleCard/ArticleCard'
import {useDispatch, useSelector} from "react-redux";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import { useParams} from "react-router-dom";
import {countArticles} from "../../features/totalArticles";
import {setNextArticleId} from "../../features/nextArticle";

const NewsView: React.FC = () => {
    const sortAsTiles = useSelector((state: { sortAsTiles: { value: boolean } }) => state.sortAsTiles.value);
    const nextArticleId = useSelector((state: { nextArticleId: { value: string } }) => state.nextArticleId.value);

    console.log('sortAsTiles',sortAsTiles)
    console.log('nextArticleId',nextArticleId)

    const [articles, setArticles] = useState<Article[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const {countryCode} = useParams() ;
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            const response = await (articles.length > 0 ? getNextNews(countryCode, nextArticleId) : getNews(countryCode));
            const filteredArticles = response.results.filter((newArticle) => !articles.some((existingArticle) => existingArticle.link === newArticle.link));
            setArticles(articles.length > 0 ? [...articles, ...filteredArticles] : response.results);
            dispatch(countArticles(response.totalResults));
            dispatch(setNextArticleId(response.nextPage));
        };
        fetchData();
    }, [countryCode, load]);

    return (
        <div className="main">
            <div className={`${sortAsTiles ? "main__content_tiles" : "main__content_list"} main__content`}>
                <button onClick={()=>{
                    setLoad(!load)
                }}>load more</button>
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
