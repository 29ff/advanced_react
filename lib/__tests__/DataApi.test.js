import StateApi from 'state-api';
import { data } from '../testData';

const store = new StateApi(data);

describe('Data API', () => {
  it('Exposes articles as an object', () => {
    const articles = store.getState().articles;
    const articlesId = data.articles[0].id;
    const articlesTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articlesId);
    expect(articles[articlesId].title).toBe(articlesTitle);
  });

  it('Exposes authors as an object', () => {
    const authors = store.getState().authors;
    const authorsId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName

    expect(authors).toHaveProperty(authorsId);
    expect(authors[authorsId].firstName).toBe(authorFirstName);
  });
});