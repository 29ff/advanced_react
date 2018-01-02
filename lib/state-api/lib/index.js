import moment from 'moment';

export default class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: moment().format('DD/MM/YYYY - hh:mm a')
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 1;

    setTimeout(() => {
      const fakeArticle = {
        ...rawData.articles[0],
        id: 'fakeArticleId'
      };
      // this.data.articles[fakeArticle.id] = fakeArticle;
      this.data = {
        ...this.data,
        articles: {
          ...this.data.articles,
          [fakeArticle.id]: fakeArticle
        }
      }
      this.notifySubcribers();
    }, 1000)
  }

  // map array to object
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  // lookup author by author id
  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  // add more value to state
  mergeWithState = (addState) => {
    this.data = {
      ...this.data,
      ...addState
    };
    this.notifySubcribers();
  }

  // notify subcribers
  notifySubcribers = () => {
    Object.values(this.subscriptions).forEach(callback => callback())
  }

  // subscribe
  subscribe = (callback) => {
    this.lastSubscriptionId++
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId;
  }

  // unsubscribe
  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  }

  // search article
  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm
    });
  }

  // get state
  getState = () => {
    return this.data;
  }

  // start clock
  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: moment().format('DD/MM/YYYY - hh:mm a')
      });
    }, 1000)
  }
}
