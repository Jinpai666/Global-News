import React from 'react';
import './ArticleListItem.scss'
import {Article} from "../../types/types";


interface Props {
    article: Article;
}

const ArticleListItem: React.FC<Props> = ({article}) => {
    return (
        <div className="article__list">

            <a href={article.link}>link</a>
        </div>
    );
}

export default ArticleListItem;
