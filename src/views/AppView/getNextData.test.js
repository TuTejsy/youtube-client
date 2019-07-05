import getNextData from './getNextData';
import AppModel from '../../models/AppModel';
import Request from '../../controllers/createRequest';

jest.mock('../../models/AppModel');
jest.mock('../../controllers/createRequest');

beforeEach(() => {
  AppModel.mockClear();
  Request.mockClear();
});

describe('getNextData', () => {
  it('Should be an instance of Function', () => {
    expect(getNextData).toBeInstanceOf(Function);
  });

  it('Should call Request constructor, AppModel constructor, AppModel.protorype.getClips', () => {
    const searchContainer = document.createElement('DIV');
    searchContainer.className = 'search-container';

    const search = document.createElement('INPUT');
    search.setAttribute('type', 'text');
    search.value = 'hello world';

    searchContainer.appendChild(search);
    document.body.appendChild(searchContainer);

    getNextData('123');

    expect(AppModel.prototype.constructor).toHaveBeenCalledTimes(1);
    expect(Request.prototype.constructor).toHaveBeenCalledTimes(1);
    expect(AppModel.prototype.getClips).toHaveBeenCalledTimes(1);
  });
});
