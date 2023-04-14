import React from 'react';
import './ArticleListItem.scss'
import {Article} from "../../types/types";


interface Props {
    article: Article;
}

const ArticleListItem: React.FC<Props> = ({article}) => {
    return (
        <div className="list">
            <h2 className="list__title">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link}>Link</a>
        </div>
    );
}

export default ArticleListItem;
