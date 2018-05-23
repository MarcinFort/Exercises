import React from 'react';

export const ArticleWithImg = (article) => {
    
    let imgURL = 'https://static01.nyt.com/' + article.imageURL;
    return (
        <div className='article'>
            <a className='article-link' href={article.webURL}>
                <img className='article-image'
                    title={article.title}
                    src={imgURL} />
            </a>
        </div>
    );
} 