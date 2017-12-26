import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import components
import ArticleList from '../ArticleList/ArticleList';

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
      store: this.props.store
    }
  }

  render() {
    return (
      <div id="container">
        <ArticleList
          articles={this.props.store.getState().articles}
        />
      </div>
    );
  }
}
