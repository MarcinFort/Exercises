import React from 'react';

export class ArticlesGrid extends React.Component {

    state = {
        articles: []
    };


    componentDidMount() {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "bc20e807da7947dd96c1a5da49d36990"
        });
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          return this.setState({articles: this.parse(result)}).bind(this);
        }).fail(function(err) {
          throw err;
        });    }

} 