import React from 'react';
import $  from 'jquery';
import { ImgGrid } from './ImgGrid';
import { NoImgLinks } from './NoImgLinks';

export class ArticlesGrid extends React.Component {

    state = {
        articlesWithImg: [],
        articlesWithoutImg: []
    };

    parse(input) {
      if (!input || !input.response) {
        return [];
      }
      let articles = input.response.docs;
      let articlesWithImg = [];
      let articlesWithoutImg = [];
      for (let i = 0; i < articles.length; i++) {
        let article = articles[i];
        if (article.multimedia.find(this.isXL)) {
          articlesWithImg.push({
            id: article._id,
            title: article.headline.main || 'Untitled',
            imageURL: article.multimedia.find(this.isXL).url || '#',
            webURL: article.web_url || '#'
          })
        } else {
          articlesWithoutImg.push({
            id: article._id,
            title: article.headline.main || 'Untitled',
            webURL: article.web_url || '#',
            snippet: article.snippet
          })
        }
      }
      return [articlesWithImg, articlesWithoutImg];

    }

    isXL (image) {
      return image.subtype === 'xlarge';
    }

    componentDidMount() {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "bc20e807da7947dd96c1a5da49d36990",
          'sort': "newest"
        });
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          return this.setState({ 
            articlesWithImg: (this.parse(result))[0],
            articlesWithoutImg: (this.parse(result))[1]
          });
        }.bind(this)).fail(function(err) {
          throw err;
        });   
    }

    render() {
      return (
        <div>
          <ImgGrid articlesWithImg={this.state.articlesWithImg}/>
          <NoImgLinks articlesWithoutImg={this.state.articlesWithoutImg}/>
        </div>
      )
    }
} 