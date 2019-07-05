import Request from './createRequest';

describe('Request.constructor', () => {
  it('Should be an instance of Function', () => {
    expect(Request.prototype.constructor).toBeInstanceOf(Function);
  });

  it('Should set data and page token', () => {
    const request1 = new Request('RS School');
    const request2 = new Request('Bsuir', 'AABB');

    expect(request1.requestUrl).toBe('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbozbNMrQD59gjJYjVXBcOt4foRBCYOro&type=video&part=snippet&maxResults=15&q=RS School');
    expect(request2.requestUrl).toBe('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbozbNMrQD59gjJYjVXBcOt4foRBCYOro&type=video&part=snippet&maxResults=15&pageToken=AABB&q=Bsuir');
  });
});
