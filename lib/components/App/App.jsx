import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pickBy from 'lodash.pickby'

// import components
import ArticleList from '../ArticleList/ArticleList'
import SearchBar from '../SearchBar/SearchBar'
import TimeStamp from '../Timestamp/Timestamp'

export default class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  state = this.props.store.getState()

  onStoreChange = () => {
    this.setState(this.props.store.getState())
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange)
    this.props.store.startClock()
  }

  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId)
  }


  render() {
    let { articles, searchTerm } = this.state
    const searchByReg = new RegExp(searchTerm, 'i')
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchByReg) || value.body.match(searchByReg)
      })
    }
    return (
      <div id="container">
        <TimeStamp />
        <SearchBar />
        {
          (Object.keys(articles).length) ?
          <ArticleList
            articles={articles}
          /> :
          <div id="search-no-result">No article was found!</div>
        }
      </div>
    )
  }
}
