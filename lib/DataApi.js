export default class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticle() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthor() {
    return this.mapIntoObject(this.rawData.authors);
  }
}