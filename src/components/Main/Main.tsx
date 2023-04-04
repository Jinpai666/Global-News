import React, { useState } from 'react';
import './Main.scss';
import { getNews, Article } from '../../services/getNews';

const Main: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    const handleButtonClick = async () => {
        const response = await getNews();
        setArticles(response);
        console.log(articles)
    };

    return (
        <div className="main">
            <button onClick={handleButtonClick}>test</button>
            <div className="main__side-menu">
                <ul>
                    <li>polska</li>
                    <li>japonia</li>
                    <li>usa</li>
                </ul>
            </div>
            <div className="main__content">
                {articles.map((article) => (
                    <div  className={"main__article"} key={article.title}>
                        <p>{article.title}</p>
                        <p>{article.description}</p>
                        <a target="_blank" href={article.url}>Link</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
