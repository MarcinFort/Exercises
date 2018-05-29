import React from 'react';
import { ImgGrid } from './ImgGrid';
import { NoImgLinks } from './NoImgLinks';

export class ArticlesGrid extends React.Component {

    state = {
        articlesWithImg: [],
        articlesWithoutImg: []
    };

    isXL (image) {
      return image.subtype === 'xlarge';
    }

    componentWillMount() {
        let articlesWithImg = [];
        let articlesWithoutImg = [];
        let page = 0;
        const permUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bc20e807da7947dd96c1a5da49d36990&sort=newest";
        let url = "";
        
        const parse = input => {
          if (!input || !input.response) {
            return [];
          }
          let articles = input.response.docs;
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
        }    


        let fetchNow = () => {
          url = permUrl + "&page=" + page;
          fetch(url)
          .then(result => result.json())
          .then(result => parse(result))
          .then(() => {
            if (articlesWithImg.length >= 4) {
              this.setState({
                articlesWithImg: articlesWithImg,
                articlesWithoutImg: articlesWithoutImg
              })
            } else {
              this.setState({
                articlesWithImg: articlesWithImg,
                articlesWithoutImg: articlesWithoutImg
              })
              page++;
              fetchNow();
            }
          })

        }

        fetchNow();
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