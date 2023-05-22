import React, {useEffect, useState} from 'react';
import './NewsView.scss';
import {getNews} from '../../services/getNews';
import {Article} from '../../types/types'
import ArticleCard from '../ArticleCard/ArticleCard'
import {useDispatch, useSelector} from "react-redux";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import {useParams} from "react-router-dom";
import {countArticles} from "../../features/totalArticles";
import {setNextArticleId} from "../../features/nextArticle";
import {handleLoadClick} from '../../features/load'


const NewsView: React.FC = () => {
    const sortAsTiles = useSelector((state: { sortAsTiles: { value: boolean } }) => state.sortAsTiles.value);
    const nextArticleId = useSelector((state: { nextArticleId: { value: string } }) => state.nextArticleId.value);

    const [articles, setArticles] = useState<Article[]>([]);
    const {countryCode} = useParams();
    const dispatch = useDispatch();
    const loadArticles = useSelector((state: { loadArticles: { value: boolean } }) => state.loadArticles.value);
    const [country, setCountry] = useState(countryCode)


    useEffect(() => {
        setCountry(countryCode)
        setArticles([])
    }, [countryCode])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNews(countryCode, nextArticleId);
            const filteredArticles = response.results.filter((newArticle) => !articles.some((existingArticle) => existingArticle.link === newArticle.link));
            setArticles(articles.length > 0 ? [...articles, ...filteredArticles] : response.results);
            dispatch(countArticles(response.totalResults));
            dispatch(setNextArticleId(response.nextPage));
        };
        fetchData();
    }, [country, loadArticles]);

    return (
        <>
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
            {articles.length > 0 && <button className="main__load-button" onClick={() => {
                dispatch(handleLoadClick());
            }}>Załaduj więcej</button>}
        </>

    );
};

export default NewsView;
