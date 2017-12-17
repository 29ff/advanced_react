import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App/App'

export default ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);