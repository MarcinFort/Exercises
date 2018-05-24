import React from 'react';
import { ArticleWithImg } from './ArticleWithImg';

export const ImgGrid = (articlesWithImg) => {

    return(
        <div className="imgGrid">
            {articlesWithImg.map(article => <ArticleWithImg article={article} />)}
        </div>
    )
    
}