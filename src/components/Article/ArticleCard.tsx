import React from 'react';
import './ArticleCard.scss'
import { Article } from "../../types/types";



interface Props {
    article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
    return (
        <div className={"article"} key={article.title}>
            <p>{article.title}</p>
            {article.description && <p>{article.description}</p>}
            <a target="_blank" href={article.url}>Link</a>
        </div>
    );
}

export default ArticleCard;
