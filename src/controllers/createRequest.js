export default class Request {
  constructor(data, page) {
    if (data === '') {
      alert('Enter something');

      throw Error('Error!! incorrect data!');
    }

    const token = page ? `&pageToken=${page}` : '';
    this.requestUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbozbNMrQD59gjJYjVXBcOt4foRBCYOro&type=video&part=snippet&maxResults=15${token}&q=${data}`;
  }
}
