import React, { PureComponent } from 'react'
import storeProvider from '../storeProvider'

class TimeStamp extends PureComponent {
  render() {
    return (
      <div>
        {this.props.timestamp}
      </div>
    )
  }
}

function extraProps(store, originalProps) {
  return {
    timestamp: store.getState().timestamp
  }
}

export default storeProvider(extraProps)(TimeStamp)
