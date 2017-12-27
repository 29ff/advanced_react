import moment from 'moment';

export default class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: '...'
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 1;
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
        timestamp: moment().format('DD/MM/YYYY - hh:mm:ss a')
      });
    }, 1000)
  }
}
