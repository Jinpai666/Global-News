import React from 'react';
import './ArticleListItem.scss'
import {Article} from "../../types/types";


type Props = {
    article: Article;
}
const ArticleListItem: React.FC<Props> = ({article}) => {

    const date = article.pubDate ? new Date(article.pubDate) : null;
    const formattedDate = date?.toLocaleDateString('pl-PL');
    const formattedTime = date?.toLocaleTimeString('pl-PL');

    return (
        <div className="list">
            <h2 className="list__title">{article.title.slice(0, 70)} {article.title.length > 70 && "..."}</h2>
            <div className="list__bottom">
                <a className="list__link" target="_blank" href={article.link}>Go to article</a>
                <div className="list__bottom-date">
                    <div>{formattedDate}&nbsp;|&nbsp;</div>
                    <div>{formattedTime}</div>
                </div>


            </div>
        </div>
    );
}

export default ArticleListItem;
