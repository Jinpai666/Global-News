import React from 'react';
import './ArticleCard.scss'
import {Article} from "../../types/types";
import {useSelector} from "react-redux";


interface Props {
    article: Article;
}

const ArticleCard: React.FC<Props> = ({article}) => {
    return (
        <div className="article__card">

            <a className="article__link" target="_blank" href={article.link}>
                <div className="article__image-container">
                    {article.image_url ?
                        <img className="article__image" src={`${article.image_url}`} alt="article image"/>
                        : <img className="article__image article__image-placeholder"
                               src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                               alt="article image"/>

                    }
                </div>

                <p className="article__title">
                    {article.title}

                </p>
                {article.description &&
                    <p>
                        {article.description.slice(0,150)}
                        {article.description.length > 150 && "..."}
                    </p>}
            </a>
        </div>
    );
}

export default ArticleCard;
