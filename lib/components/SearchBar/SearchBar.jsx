import React, { PureComponent } from 'react'
import debounce from 'lodash.debounce'
import storeProvider from '../storeProvider'

class SearchBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm)
  }, 300)

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch()
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

export default storeProvider()(SearchBar)
