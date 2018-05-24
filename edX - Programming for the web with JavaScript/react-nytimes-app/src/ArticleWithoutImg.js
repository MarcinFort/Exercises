import React from 'react';

export const ArticleWithoutImg = (article) => {
    
    return (
        <div className='article-no-img'>
            <a className='article-link' href={article.webURL}>
                <div className='article-title'>{article.title}</div>
                <div className='article-snippet'>{article.snippet}</div>
            </a>
        </div>
    );
}