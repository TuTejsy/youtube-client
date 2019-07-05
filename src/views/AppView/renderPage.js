import Request from '../../controllers/createRequest';
import App from '../../controllers/App';

export default function renderPage() {
  document.head.innerHTML = `${document.head.innerHTML}
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"></link>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=cyrillic"
      rel="stylesheet">`;

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

  let data;

  function enterPress(e) {
    if (e.keyCode === 13) {
      data = search.value;
      const request = new Request(data);

      const app = new App(request.requestUrl);
      app.start();
    }
  }
  search.addEventListener('keypress', enterPress);

  searchContainer.appendChild(search);
  container.appendChild(searchContainer);
  container.appendChild(slider);
  container.appendChild(buttonsContainer);
  document.body.appendChild(container);
}
