import React from 'react';
import { ArticleWithoutImg } from './ArticleWithoutImg';

export const NoImgSection = (props) => {
    return(
        <div className="art_without_img_section">
            <h2>{props.sectionName}</h2>
            {props.artWithoutImgSection.map(article => <ArticleWithoutImg article={article} />)}
        </div>
    )
}
