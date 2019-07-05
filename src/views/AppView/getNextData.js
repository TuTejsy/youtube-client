import AppModel from '../../models/AppModel';
import Request from '../../controllers/createRequest';

export default function getNextData(token) {
  const search = document.querySelector('.search-container input');

  const request = new Request(search.value, token);

  const state = {
    url: request.requestUrl,
  };

  const model = new AppModel(state);
  const data = model.getClips();
  return data;
}
