import React from 'react';
import ArticleList from '../ArticleList/ArticleList';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Article List', () => {
  it('renders correctly', () => {
    const testProps = {
      articles: {
        a: { id: 'a', title: 'a', body: 'a', date: 'a' },
        b: { id: 'b', title: 'b', body: 'b', date: 'b' },
        c: { id: 'c', title: 'c', body: 'c', date: 'c' }
      }
    }
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
  })
})
