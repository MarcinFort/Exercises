import React from 'react';

export const ArticleWithImg = (props) => {
    let imgURL = 'https://static01.nyt.com/' + props.article.imageURL;
    return (
        <div className='article'>
            <div class="article-img-container">
                <a className='article-link' href={props.article.webURL}>
                    <img className='article-image'
                        alt={props.article.title}
                        title={props.article.title}
                        src={imgURL} 
                    />
                </a>
            </div>
            <div className="article-category">{props.article.type + " - " + props.article.section}</div>
            <div className="article-caption">{props.article.title}</div>
        </div>
    );
}