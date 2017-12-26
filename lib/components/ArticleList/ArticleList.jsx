import React from 'react';

// import components
import Article from '../Article/Article';

const ArticleList = (props) => {
  const { articles } = props;
  return (
    <div>
      {
        Object.keys(articles).map((key) => {
          return <Article
            key={key}
            article={articles[key]}
          />
        })
      }
    </div>
  );
};

export default ArticleList;
