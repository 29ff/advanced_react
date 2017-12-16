import React from 'react';

const Article = (props) => {
  const { article, author } = props
  return (
    <div>
      <h3 id="title-article"><strong>{article.title}</strong></h3>
      <div id="time-article"><strong>{article.date}</strong></div>
      <div id="author-article">
        <a href={author.website} target="_blank">
          <em>{author.firstName} {author.lastName}</em>
        </a>
      </div>
      <div>{article.body}</div>
    </div>
  );
};

export default Article;