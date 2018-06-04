import React from 'react';
import { NoImgSection } from './NoImgSection';

export class NoImgLinks extends React.Component {

    state = {
        sections: [],
        articles_with_section: []
    }

    componentWillReceiveProps() {
        let sections = [];
        let articles_with_section = [];
        let arts = this.props.articlesWithoutImg;
        arts.forEach(article => {
            let category = article.type + " - " + article.section;
            if (!sections.includes(category)) {
                sections.push(category);
                articles_with_section.push([article]);
            } else {
                let index = sections.indexOf(category);
                articles_with_section[index].push(article);
            }
        });
        this.setState({
            sections: sections,
            articles_with_section: articles_with_section
        })
    }

    render() {
        return(
            <div className="articlesWithoutImg">
                {
                    this.state.sections.map((section, index) => <NoImgSection sectionName={section} artWithoutImgSection={this.state.articles_with_section[index]} />)
                }
            </div>
        )
    }
    
}