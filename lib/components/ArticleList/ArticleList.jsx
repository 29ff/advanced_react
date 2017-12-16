import React from 'react';

// import components
import Article from '../Article/Article'

const ArticleList = (props) => {
  const { articles, authors } = props
  return (
    <div>
      {
        Object.keys(articles).map((key) => {
          return <Article
            key={key}
            article={articles[key]}
            author={authors[articles[key].authorId]}
          />
        })
      }
    </div>
  );
};

export default ArticleList;