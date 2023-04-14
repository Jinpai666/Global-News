import React from 'react';
import './ArticleCard.scss'
import {Article} from "../../types/types";
import {useSelector} from "react-redux";


interface Props {
    article: Article;
}

const ArticleCard: React.FC<Props> = ({article}) => {
    return (
        <div className="card">

            <a className="card__link" target="_blank" href={article.link}>
                <div className="card__image-container">
                    {article.image_url ?
                        <img className="card__image" src={`${article.image_url}`} alt="article image"/>
                        : <img className="card__image card__image-placeholder"
                               src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                               alt="article image"/>

                    }
                </div>

                <p className="card__title">
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
