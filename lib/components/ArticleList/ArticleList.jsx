import React, { PureComponent } from 'react'

// import components
import Article from '../Article/Article'

class ArticleList extends PureComponent {
  render() {
    const { articles } = this.props
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
    )
  }
}

export default ArticleList
