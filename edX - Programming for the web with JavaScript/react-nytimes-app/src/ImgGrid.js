import React from 'react';
import { ArticleWithImg } from './ArticleWithImg';

export const ImgGrid = (props) => {
    return(
        <div className="imgGrid">
            {props.articlesWithImg.map(article => <ArticleWithImg article={article} />)}
        </div>
    )

}