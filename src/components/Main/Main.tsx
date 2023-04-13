import React, {useEffect, useState} from 'react';
import './Main.scss';
import { getNews } from '../../services/getNews';
import { Article } from '../../types/types'
import ArticleCard from '../Article/ArticleCard'

const Main: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNews();
            setArticles(response);
            console.log(response)
        };
        fetchData();
    }, []);


    return (
        <div className="main">
            <div className="main__side-menu">
                <ul>
                    <li>polska</li>
                    <li>japonia</li>
                    <li>usa</li>
                </ul>
            </div>
            <div className="main__content">
                {articles.map((article, idx) => (
                 <ArticleCard key={idx} article={article}/>
                ))}
            </div>
        </div>
    );
};

export default Main;
