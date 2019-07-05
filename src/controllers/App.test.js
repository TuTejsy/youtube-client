import App from './App';

import AppView from '../views/AppView/AppView';

import AppModel from '../models/AppModel';

jest.mock('../views/AppView/AppView');
jest.mock('../models/AppModel');

beforeEach(() => {
  AppView.mockClear();
  AppModel.mockClear();
});

describe('App.constructor', () => {
  it('Should be an instance of Function', () => {
    expect(App.prototype.constructor).toBeInstanceOf(Function);
  });

  it('Should set state in object', () => {
    const app = new App('www.test.com');

    const result = 'www.test.com';

    expect(app.state.url).toBe(result);
  });
});

describe('App.prototype.start', () => {
  it('Should be an instance of Function', () => {
    expect(App.prototype.start).toBeInstanceOf(Function);
  });

  it('Should call AppModel construcor, AppView constructor, AppModel.getClips and view.renderCards', () => {
    const newApp = new App('data');
    newApp.start().then(() => {
      expect(AppView.prototype.constructor).toHaveBeenCalledTimes(1);
      expect(AppView.prototype.renderCards).toHaveBeenCalledTimes(1);

      expect(AppModel.prototype.constructor).toHaveBeenCalledTimes(1);
      expect(AppModel.prototype.getClips).toHaveBeenCalledTimes(1);
    });
  });
});
