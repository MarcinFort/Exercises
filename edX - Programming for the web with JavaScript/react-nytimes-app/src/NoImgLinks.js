import React from 'react';
import { ArticleWithoutImg } from './ArticleWithoutImg';

export const NoImgLinks = (articlesWithoutImg) => {

    return(
        <div className="articlesWithoutImg">
            {articlesWithoutImg.map(article => <ArticleWithoutImg article={article} />)}
        </div>
    )
    
}