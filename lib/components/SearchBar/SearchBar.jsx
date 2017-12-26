import React, { Component } from 'react';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300)

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value}, () => {
      this.doSearch();
    })
  }

  render() {
    return (
      <div>
        <input id="search"
          type="search"
          placeholder="Enter search term..."
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
