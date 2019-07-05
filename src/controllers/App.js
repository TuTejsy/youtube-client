import AppModel from '../models/AppModel';
import AppView from '../views/AppView';

export default class App {
  constructor(data) {
    this.state = {
      url: data,
    };
  }

  async start() {
    const model = new AppModel(this.state);
    const data = await model.getClips();
    const view = new AppView(data);

    view.renderCards(15);
  }
}
