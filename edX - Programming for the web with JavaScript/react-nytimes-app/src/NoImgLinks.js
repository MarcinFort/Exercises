import React from 'react';
import { ArticleWithoutImg } from './ArticleWithoutImg';

export const NoImgLinks = (props) => {
    return(
        <div className="articlesWithoutImg">
            {props.articlesWithoutImg.map(article => <ArticleWithoutImg article={article} />)}
        </div>
    )
    
}