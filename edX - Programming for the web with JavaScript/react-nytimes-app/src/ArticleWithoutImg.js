import React from 'react';

export const ArticleWithoutImg = (props) => {
    return (
        <div className='article-no-img'>
            <a className='article-link' href={props.article.webURL}>
                <div className='article-title'>{props.article.title}</div>
                <div className='article-snippet'>{props.article.snippet}</div>
            </a>
        </div>
    );
}