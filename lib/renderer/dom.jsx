import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App/App'

const initialData = {
  articles: {},
  authors: {}
};

export default ReactDOM.hydrate(
  <App initialData={initialData} />,
  document.getElementById('root')
);