import React from 'react'
import PropTypes from 'prop-types'
import storeProvider from '../storeProvider'

// import common file
import convertDate from 'common/convertDate'

const Article = (props) => {
  const { article, author } = props
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
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
}

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  }
}

export default storeProvider(extraProps)(Article)
