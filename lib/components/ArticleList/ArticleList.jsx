import React from 'react';

// import components
import Article from '../Article/Article';

const ArticleList = (props) => {
  const { articles, articleAction } = props;

  return (
    <div>
      {
        Object.keys(articles).map((key) => {
          return <Article
            key={key}
            article={articles[key]}
            articleAction={articleAction}
          />
        })
      }
    </div>
  );
};

export default ArticleList;