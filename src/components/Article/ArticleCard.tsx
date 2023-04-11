import React from 'react';
import './ArticleCard.scss'
import {Article} from "../../types/types";


interface Props {
    article: Article;
}

const ArticleCard: React.FC<Props> = ({article}) => {
    return (
        <div className="article" key={article.title}>
            <a className="article__link" target="_blank" href={article.url}>
            {article.urlToImage ?
                <div className="article__image-container">
                    <img className="article__image" src={`${article.urlToImage}`} alt="article image"/>
                </div>
            : <div className="article__image-placeholder"/>
            }
            <p>{article.title}</p>
            {article.description && <p>{article.description}</p>}
            </a>
        </div>
    );
}

export default ArticleCard;
