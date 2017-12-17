import React from 'react';

// import style
import './Article.scss';

// import common file
import convertDate from '../../common/convertDate';

const Article = (props) => {
  const { article, articleAction } = props;
  const author = articleAction.lookupAuthor(article.authorId);
  return (
    <div id="article">
      <h3 id="title-article"><strong>{article.title}</strong></h3>
      <div id="date-article"><strong>{convertDate(article.date)}</strong></div>
      <div id="author-article">
        Author:&nbsp;
        <a href={author.website} target="_blank">
          <em>{author.firstName} {author.lastName}</em>
        </a>
      </div>
      <div id="body-article">{article.body}</div>
    </div>
  );
};

export default Article;