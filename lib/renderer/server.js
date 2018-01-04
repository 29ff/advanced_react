import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from 'components/App/App';
import StateApi from 'state-api';

import { host, port } from 'config';

const serverRender = async () => {
  const res = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(res.data);

  return {
    initialData: res.data,
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    )
  }
};

export default serverRender;
