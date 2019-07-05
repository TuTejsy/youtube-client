export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  static extractClipNames(data) {
    return data.items.map(clip => clip.snippet.title);
  }

  static extractClipImages(data) {
    return data.items.map(clip => clip.snippet.thumbnails.medium.url);
  }

  static extractClipDescriptions(data) {
    return data.items.map(clip => clip.snippet.description);
  }

  static extractClipChannelTitles(data) {
    return data.items.map(clip => clip.snippet.channelTitle);
  }

  static extractUploadDate(data) {
    return data.items.map(clip => clip.snippet.publishedAt);
  }

  static extractClipsUrl(data) {
    return data.items.map(clip => `https://www.youtube.com/watch?v=${clip.id.videoId}`);
  }

  static getClipsId(data) {
    return data.items.map(clip => clip.id.videoId);
  }

  static extractClipsViewCount(data) {
    return data.items.map(clip => clip.statistics.viewCount);
  }

  async getClips() {
    const { url } = this.state;

    const responce = await fetch(url);
    const data = await responce.json();

    if (data.pageInfo.totalResults === 0) {
      alert('Enter other data');

      throw Error('Error!! incorrect data!');
    }

    const clipsId = AppModel.getClipsId(data);
    const viewCountUrl = `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAbozbNMrQD59gjJYjVXBcOt4foRBCYOro&id=${clipsId.join(',')}&part=snippet,statistics`;

    const viewCountResponce = await fetch(viewCountUrl);
    const viewCountData = await viewCountResponce.json();


    return {
      titles: AppModel.extractClipNames(data),
      images: AppModel.extractClipImages(data),
      descriptions: AppModel.extractClipDescriptions(data),
      authors: AppModel.extractClipChannelTitles(data),
      uploadDate: AppModel.extractUploadDate(data),
      url: AppModel.extractClipsUrl(data),
      viewCount: AppModel.extractClipsViewCount(viewCountData),
      nextToken: data.nextPageToken,
    };
  }
}
