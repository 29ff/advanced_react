import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('Data API', () => {
  it('Exposes articles as an object', () => {
    const articles = api.getArticle();
    const articlesId = data.articles[0].id;
    const articlesTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articlesId);
    expect(articles[articlesId].title).toBe(articlesTitle);
  });

  it('Exposes authors as an object', () => {
    const authors = api.getAuthor();
    const authorsId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName

    expect(authors).toHaveProperty(authorsId);
    expect(authors[authorsId].firstName).toBe(authorFirstName);
  });
});