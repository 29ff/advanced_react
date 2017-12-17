import React from 'react';
import ArticleList from '../ArticleList/ArticleList';

import renderer from 'react-test-renderer';

describe('Article List', () => {
  it('renders correctly', () => {
    const testProps = {
      articles: {
        a: { id: 'a' },
        b: { id: 'b' },
        c: { id: 'c' }
      },
      store: {
        lookupAuthor: jest.fn(() => ({}))
      }
    }
    const articleList = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    expect(articleList).toMatchSnapshot();
  })
})