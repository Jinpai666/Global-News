import React from 'react';
import './ArticleCard.scss'
import {Article} from "../../types/types";



interface Props {
    article: Article;
}

const ArticleCard: React.FC<Props> = ({article}) => {
    return (
        <div className="article">
            <a className="article__link" target="_blank" href={article.url}>
            {article.urlToImage ?
                <div className="article__image-container">
                    <img className="article__image" src={`${article.urlToImage}`} alt="article image"/>
                </div>
            : <img className="article__image article__image-placeholder" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg" alt="article image"/>
            }
            <p className="article__title">{article.title}</p>
            {article.description && <p>{article.description}</p>}
            </a>
        </div>
    );
}

export default ArticleCard;
