import React, { Component } from 'react';

// import components
import ArticleList from '../ArticleList/ArticleList';

export default class App extends Component {
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
            store={this.state.store}
        />
      </div>
    );
  }
}