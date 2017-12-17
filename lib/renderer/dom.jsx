import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App/App'

import StateApi from 'state-api';

const store = new StateApi(window.initialData);

export default ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('root')
);