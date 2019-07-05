import AppModel from './AppModel';

global.fetch = require('node-fetch');


describe('AppModel.extractClipNames', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipNames).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains clip titles', () => {
    const data = {
      items: [
        {
          snippet: {
            title: 'The Rolling Scopes',
          },
        },
        {
          snippet: {
            title: 'Front-end',
          },
        },
        {
          snippet: {
            title: 'Tutejsy',
          },
        },
      ],
    };

    const result = AppModel.extractClipNames(data);

    expect(result).toEqual(['The Rolling Scopes', 'Front-end', 'Tutejsy']);
  });
});

describe('AppModel.extractClipImages', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipImages).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains url of clip images', () => {
    const data = {
      items: [
        {
          snippet: {
            thumbnails: {
              medium: {
                url: 'Epam.by',
              },
            },
          },
        },
        {
          snippet: {
            thumbnails: {
              medium: {
                url: 'www.tutejsy.com',
              },
            },
          },
        },
        {
          snippet: {
            thumbnails: {
              medium: {
                url: 'www.Asoi2018/Bsuir.by',
              },
            },
          },
        },
      ],
    };

    const result = AppModel.extractClipImages(data);

    expect(result).toEqual(['Epam.by', 'www.tutejsy.com', 'www.Asoi2018/Bsuir.by']);
  });
});


describe('AppModel.extractClipDescriptions', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipDescriptions).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains clip descriptions', () => {
    const data = {
      items: [
        {
          snippet: {
            description: 'Very interesting video!',
          },
        },
        {
          snippet: {
            description: 'music video',
          },
        },
        {
          snippet: {
            description: 'Attention!',
          },
        },
      ],
    };

    const result = AppModel.extractClipDescriptions(data);

    expect(result).toEqual(['Very interesting video!', 'music video', 'Attention!']);
  });
});


describe('AppModel.extractClipChannelTitles', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipChannelTitles).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains channel titles', () => {
    const data = {
      items: [
        {
          snippet: {
            channelTitle: 'The Rolling Scopes',
          },
        },
        {
          snippet: {
            channelTitle: 'ZeTeam2019',
          },
        },
        {
          snippet: {
            channelTitle: 'Sobolev',
          },
        },
      ],
    };

    const result = AppModel.extractClipChannelTitles(data);

    expect(result).toEqual(['The Rolling Scopes', 'ZeTeam2019', 'Sobolev']);
  });
});


describe('AppModel.extractUploadDate', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractUploadDate).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains clip upload date', () => {
    const data = {
      items: [
        {
          snippet: {
            publishedAt: '2016-01-10T22:40:42.000Z',
          },
        },
        {
          snippet: {
            publishedAt: '2019-03-09T22',
          },
        },
        {
          snippet: {
            publishedAt: '2017-03-25',
          },
        },
      ],
    };

    const result = AppModel.extractUploadDate(data);

    expect(result).toEqual(['2016-01-10T22:40:42.000Z', '2019-03-09T22', '2017-03-25']);
  });
});


describe('AppModel.extractClipsUrl', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipsUrl).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains id urls', () => {
    const data = {
      items: [
        {
          id: {
            videoId: '1234',
          },
        },
        {
          id: {
            videoId: 'Belarus',
          },
        },
        {
          id: {
            videoId: '@qwerty',
          },
        },
      ],
    };

    const result = AppModel.extractClipsUrl(data);

    expect(result).toEqual(['https://www.youtube.com/watch?v=1234', 'https://www.youtube.com/watch?v=Belarus', 'https://www.youtube.com/watch?v=@qwerty']);
  });
});

describe('AppModel.getClipsId', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.getClipsId).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains clip id', () => {
    const data = {
      items: [
        {
          id: {
            videoId: '1234',
          },
        },
        {
          id: {
            videoId: 'Belarus',
          },
        },
        {
          id: {
            videoId: '@qwerty',
          },
        },
      ],
    };

    const result = AppModel.getClipsId(data);

    expect(result).toEqual(['1234', 'Belarus', '@qwerty']);
  });
});


describe('AppModel.extractClipsViewCount', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.extractClipsViewCount).toBeInstanceOf(Function);
  });

  it('Should return array of strings that contains clips view count', () => {
    const data = {
      items: [
        {
          statistics: {
            viewCount: '100500',
          },
        },
        {
          statistics: {
            viewCount: '9991234',
          },
        },
        {
          statistics: {
            viewCount: '19872134',
          },
        },
      ],
    };

    const result = AppModel.extractClipsViewCount(data);

    expect(result).toEqual(['100500', '9991234', '19872134']);
  });
});

describe('AppModel.prototype.getClips', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.prototype.getClips).toBeInstanceOf(Function);
  });

  it('Should return promise with all properties', async () => {
    async function getTestResult() {
      const responce = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=3&q=js');
      const data = await responce.json();

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

    const state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=3&q=js',
    };

    const model = new AppModel(state);

    const result = model.getClips();
    const testResult = getTestResult();
    expect(result).toEqual(testResult);
    expect(await result).toEqual(await result);
  });
});

describe('AppModel.constructor', () => {
  it('Should be an instance of Function', () => {
    expect(AppModel.prototype.constructor).toBeInstanceOf(Function);
  });

  it('Should set this state', () => {
    const state = 'qwerty';
    const model = new AppModel(state);

    expect(model.state).toBe(state);
  });
});
