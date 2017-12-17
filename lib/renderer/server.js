import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from 'components/App/App';
import DataApi from 'state-api';

import { host, port } from 'config';

const serverRender = async () => {
  const res = await axios.get(`http://${host}:${port}/data`);
  const api = new DataApi(res.data);

  const initialData = {
    articles: api.getArticle(),
    authors: api.getAuthor()
  };

  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  )
};

export default serverRender;