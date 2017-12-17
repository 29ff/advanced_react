import React from 'react';

// import components
import Article from '../Article/Article';

const ArticleList = (props) => {
  const { store } = props;
  const articles = store.getState().articles;
  return (
    <div>
      {
        Object.keys(articles).map((key) => {
          return <Article
            key={key}
            article={articles[key]}
            store={store}
          />
        })
      }
    </div>
  );
};

export default ArticleList;