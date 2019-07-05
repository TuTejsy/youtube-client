import AppView from './AppView';

describe('AppView.prototype.changeThisData', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.changeThisData).toBeInstanceOf(Function);
  });

  it('Should change clip properties', () => {
    const data = {
      titles: ['We Did a BIG MISTAKE !!', 'this Happened with my HAYABUSA in NEPAL', 'JS ft. R Kelly - Love Angel'],
      images: ['https://i.ytimg.com/vi/qBDU4vcILhg/mqdefault.jpg', 'https://i.ytimg.com/vi/SJKMpODfLfU/mqdefault.jpg', 'https://i.ytimg.com/vi/7QkCrmq3LYc/mqdefault.jpg'],
      descriptions: [
        'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH --------------------------------------------------------------- ***Buy my CALENDAR and other ...',
        'EP11 #bhutanonbusa #indiatobhutan Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH Road Gods : https://amzn.to/2Xy0786 Rynox Gears ...',
        'Love Angel music video taken from the Ice Cream album.',
      ],
      authors: ['JS Films', 'JS Films', 'askmeifimalemon'],
      uploadDate: ['2019-05-07T03:30:04.000Z', '2019-05-03T03:30:01.000Z', '2007-02-06T03:50:56.000Z'],
      url: ['https://www.youtube.com/watch?v=qBDU4vcILhg', 'https://www.youtube.com/watch?v=SJKMpODfLfU', 'https://www.youtube.com/watch?v=7QkCrmq3LYc'],
      viewCount: ['2148846', '5662221', '268158'],
      nextToken: 'CA8QAA',
    };

    const view = new AppView(data);

    const newData = {
      titles: ['We Did', 'HAYABUSA in NEPAL', 'Love Angel'],
      images: ['https://i.ytimg.com/vi/qBDU4sfdgewLhg/mqdefault.jpg', 'https://i.ytimg.com/vi/sdfghMpODfLfU/mqdefault.jpg', 'https://i.ytimg.com/vi/7QkCdsfghq3LYc/mqdefault.jpg'],
      descriptions: [
        'Interesting video',
        'Look at ME!',
        'Love Angel music',
      ],
      authors: ['Films', 'JS', 'TUTEJSY'],
      uploadDate: ['2000-07-07T03:30:04.000Z', '2009-09-03T03:30:01.000Z', '2017-02-06T03:50:56.000Z'],
      url: ['https://www.youtube.com/watch?v=qBSDF4vcILhg', 'https://www.youtube.com/watch?v=SJKMpSDFfLfU', 'https://www.youtube.com/watch?v=7QkCrASDFc'],
      viewCount: ['21446', '5662223421', '2682342358'],
      nextToken: 'CA8QBB',
    };

    view.changeThisData(newData).then(() => {
      expect(view.titles).toEqual(newData.titles);
      expect(view.images).toEqual(newData.images);
      expect(view.descriptions).toEqual(newData.descriptions);
      expect(view.authors).toEqual(newData.authors);
      expect(view.uploadDate).toEqual(newData.uploadDate);
      expect(view.url).toEqual(newData.url);
      expect(view.viewCount).toEqual(newData.viewCount);
      expect(view.nextToken).toBe(newData.nextToken);
    });
  });
});

describe('AppView.prototype.constructor', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.constructor).toBeInstanceOf(Function);
  });

  it('Should set clip properties', () => {
    const data = {
      titles: ['We Did a BIG MISTAKE !!', 'this Happened with my HAYABUSA in NEPAL', 'JS ft. R Kelly - Love Angel'],
      images: ['https://i.ytimg.com/vi/qBDU4vcILhg/mqdefault.jpg', 'https://i.ytimg.com/vi/SJKMpODfLfU/mqdefault.jpg', 'https://i.ytimg.com/vi/7QkCrmq3LYc/mqdefault.jpg'],
      descriptions: [
        'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH --------------------------------------------------------------- ***Buy my CALENDAR and other ...',
        'EP11 #bhutanonbusa #indiatobhutan Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH Road Gods : https://amzn.to/2Xy0786 Rynox Gears ...',
        'Love Angel music video taken from the Ice Cream album.',
      ],
      authors: ['JS Films', 'JS Films', 'askmeifimalemon'],
      uploadDate: ['2019-05-07T03:30:04.000Z', '2019-05-03T03:30:01.000Z', '2007-02-06T03:50:56.000Z'],
      url: ['https://www.youtube.com/watch?v=qBDU4vcILhg', 'https://www.youtube.com/watch?v=SJKMpODfLfU', 'https://www.youtube.com/watch?v=7QkCrmq3LYc'],
      viewCount: ['2148846', '5662221', '268158'],
      nextToken: 'CA8QAA',
    };

    const view = new AppView(data);

    expect(view.titles).toEqual(data.titles);
    expect(view.images).toEqual(data.images);
    expect(view.descriptions).toEqual(data.descriptions);
    expect(view.authors).toEqual(data.authors);
    expect(view.uploadDate).toEqual(data.uploadDate);
    expect(view.url).toEqual(data.url);
    expect(view.viewCount).toEqual(data.viewCount);
    expect(view.nextToken).toBe(data.nextToken);
  });
});

describe('AppView.prototype.renderCards', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.renderCards).toBeInstanceOf(Function);
  });

  it('Should render cards', () => {
    const data = {
      titles: ['We Did a BIG MISTAKE !!', 'this Happened with my HAYABUSA in NEPAL', 'JS ft. R Kelly - Love Angel'],
      images: ['https://i.ytimg.com/vi/qBDU4vcILhg/mqdefault.jpg', 'https://i.ytimg.com/vi/SJKMpODfLfU/mqdefault.jpg', 'https://i.ytimg.com/vi/7QkCrmq3LYc/mqdefault.jpg'],
      descriptions: [
        'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH --------------------------------------------------------------- ***Buy my CALENDAR and other ...',
        'EP11 #bhutanonbusa #indiatobhutan Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH Road Gods : https://amzn.to/2Xy0786 Rynox Gears ...',
        'Love Angel music video taken from the Ice Cream album.',
      ],
      authors: ['JS Films', 'JS Films', 'askmeifimalemon'],
      uploadDate: ['2019-05-07T03:30:04.000Z', '2019-05-03T03:30:01.000Z', '2007-02-06T03:50:56.000Z'],
      url: ['https://www.youtube.com/watch?v=qBDU4vcILhg', 'https://www.youtube.com/watch?v=SJKMpODfLfU', 'https://www.youtube.com/watch?v=7QkCrmq3LYc'],
      viewCount: ['2148846', '5662221', '268158'],
      nextToken: 'CA8QAA',
    };

    const container = document.createElement('DIV');
    container.className = 'container';

    const search = document.createElement('INPUT');
    search.setAttribute('type', 'text');

    const searchContainer = document.createElement('DIV');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
    <div class="logo">
      <span class="You">You</span>
      <span class="Tube">Tube</span>
    </div>
  <i class="fas fa-search"></i>`;

    const slider = document.createElement('DIV');
    slider.className = 'slider';
    slider.innerHTML = '<div class="cards-container"></div>';

    const buttonsContainer = document.createElement('DIV');
    buttonsContainer.className = 'buttons-container';

    searchContainer.appendChild(search);
    container.appendChild(searchContainer);
    container.appendChild(slider);
    container.appendChild(buttonsContainer);
    document.body.appendChild(container);

    const view = new AppView(data);
    view.renderCards(5);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});

describe('AppView.prototype.addCards', () => {
  it('Should be an instance of Function', () => {
    expect(AppView.prototype.addCards).toBeInstanceOf(Function);
  });

  it('Should add cards', () => {
    const data = {
      titles: ['We Did a BIG MISTAKE !!', 'this Happened with my HAYABUSA in NEPAL', 'JS ft. R Kelly - Love Angel'],
      images: ['https://i.ytimg.com/vi/qBDU4vcILhg/mqdefault.jpg', 'https://i.ytimg.com/vi/SJKMpODfLfU/mqdefault.jpg', 'https://i.ytimg.com/vi/7QkCrmq3LYc/mqdefault.jpg'],
      descriptions: [
        'Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH --------------------------------------------------------------- ***Buy my CALENDAR and other ...',
        'EP11 #bhutanonbusa #indiatobhutan Get my Sunglasses from EyewearLabs: https://goo.gl/8oZwgH Road Gods : https://amzn.to/2Xy0786 Rynox Gears ...',
        'Love Angel music video taken from the Ice Cream album.',
      ],
      authors: ['JS Films', 'JS Films', 'askmeifimalemon'],
      uploadDate: ['2019-05-07T03:30:04.000Z', '2019-05-03T03:30:01.000Z', '2007-02-06T03:50:56.000Z'],
      url: ['https://www.youtube.com/watch?v=qBDU4vcILhg', 'https://www.youtube.com/watch?v=SJKMpODfLfU', 'https://www.youtube.com/watch?v=7QkCrmq3LYc'],
      viewCount: ['2148846', '5662221', '268158'],
      nextToken: 'CA8QAA',
    };

    const container = document.createElement('DIV');
    container.className = 'container';

    const slider = document.createElement('DIV');
    slider.className = 'slider';
    slider.innerHTML = '<div class="cards-container"></div>';

    const buttonsContainer = document.createElement('DIV');
    buttonsContainer.className = 'buttons-container';

    container.appendChild(slider);
    document.body.appendChild(container);

    const view = new AppView(data);
    view.addCards(5);

    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
