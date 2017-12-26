import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

// import components
import ArticleList from '../ArticleList/ArticleList';
import SearchBar from '../SearchBar/SearchBar';

export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      store: this.props.store,
      articles: this.props.store.getState().articles
    }
  }

  setSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm)
      })
    }
    return (
      <div id="container">
        <SearchBar doSearch={this.setSearchTerm}/>
        {
          (Object.keys(articles).length) ?
          <ArticleList
            articles={articles}
          /> :
          <div id="search-no-result">No article was found!</div>
        }
      </div>
    );
  }
}
