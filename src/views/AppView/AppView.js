import getNextData from './getNextData';

export default class AppView {
  constructor(clip) {
    this.titles = clip.titles;
    this.images = clip.images;
    this.descriptions = clip.descriptions;
    this.authors = clip.authors;
    this.uploadDate = clip.uploadDate;
    this.url = clip.url;
    this.viewCount = clip.viewCount;
    this.nextToken = clip.nextToken;
  }

  async changeThisData(d) {
    const data = await d;
    this.titles = data.titles;
    this.images = data.images;
    this.descriptions = data.descriptions;
    this.authors = data.authors;
    this.uploadDate = data.uploadDate;
    this.url = data.url;
    this.viewCount = data.viewCount;
    this.nextToken = data.nextToken;
  }

  async addCards(count) {
    const cardsContainer = document.querySelector('.cards-container');
    let cards = '';

    for (let i = 0; i < count; i += 1) {
      const uploadDate = this.uploadDate[i].split('').slice(0, 10).join('');

      const card = `
        <div class="card">
          <a class="clip-img"  href="${this.url[i]}" target='_blank' style="background: url('${this.images[i]}') no-repeat center">
            <h3>${this.titles[i]}</h3>
          </a>
          <h4><i class="fas fa-user"></i> ${this.authors[i]}</h4>
          <h4><i class="far fa-calendar-alt"></i> ${uploadDate}</h4>
          <h4><i class="fas fa-eye"></i> ${this.viewCount[i]}</h4>
          <p>${this.descriptions[i]}</p>
        </div>
        `;

      cards += card;
    }

    cardsContainer.innerHTML += cards;
  }

  renderCards(count) {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    this.addCards(count);

    cardsContainer.style.marginLeft = '0';

    const width = 346;
    let quantity = 4;
    let position = 0;
    let currentPosition = 0;
    let page = 1;

    const buttonsContainer = document.querySelector('.buttons-container');

    const toolTip = document.createElement('DIV');
    toolTip.classList.add('tooltip');

    const firstButton = document.createElement('BUTTON');
    firstButton.innerText = page;
    const secondButton = document.createElement('BUTTON');
    const thirdButton = document.createElement('BUTTON');
    const afterButton = document.createElement('BUTTON');
    afterButton.innerText = page + 1;

    let activeButton = firstButton;
    activeButton.classList.add('active');

    let pageCount = 1;

    let timer;
    function toolTipEvent(e) {
      const button = e.target;

      if (e.clientX) {
        timer = setTimeout(() => {
          toolTip.style.left = `${e.clientX - 10}px`;
          toolTip.style.top = `${e.clientY - 50}px`;

          toolTip.innerText = button.innerText;
          toolTip.style.display = 'block';
        }, 1000);
      } else if (e.targetTouches) {
        timer = setTimeout(() => {
          toolTip.style.left = `${e.targetTouches[0].clientX - 10}px`;
          toolTip.style.top = `${e.targetTouches[0].clientY - 50}px`;

          toolTip.innerText = button.innerText;
          toolTip.style.display = 'block';
        }, 1000);
      }
    }

    function cancelToolTip() {
      clearTimeout(timer);
      toolTip.style.display = 'none';
    }

    firstButton.addEventListener('mousedown', toolTipEvent);
    secondButton.addEventListener('mousedown', toolTipEvent);
    thirdButton.addEventListener('mousedown', toolTipEvent);
    afterButton.addEventListener('mousedown', toolTipEvent);

    firstButton.addEventListener('touchstart', toolTipEvent);
    secondButton.addEventListener('touchstart', toolTipEvent);
    thirdButton.addEventListener('touchstart', toolTipEvent);
    afterButton.addEventListener('touchstart', toolTipEvent);

    document.addEventListener('mouseup', cancelToolTip);
    document.addEventListener('touchend', cancelToolTip);

    function resize() {
      if (document.documentElement.clientWidth < width * 2) {
        quantity = 1;
      } else if (document.documentElement.clientWidth < width * 3) {
        quantity = 2;
      } else if (document.documentElement.clientWidth < width * 4) {
        quantity = 3;
      } else {
        quantity = 4;
      }

      const k = Math.floor(position / (-width * quantity));

      if (k >= 3) {
        currentPosition = position + width * quantity * 3;

        page = k - 2;
        firstButton.innerText = page;
        secondButton.innerText = page + 1;
        thirdButton.innerText = page + 2;
        afterButton.innerText = page + 3;

        activeButton.classList.remove('active');
        activeButton = afterButton;
        activeButton.classList.add('active');
      } else if (k === 2) {
        currentPosition = 0;

        page = k - 1;
        firstButton.innerText = page;
        secondButton.innerText = page + 1;
        thirdButton.innerText = page + 2;
        afterButton.innerText = page + 3;

        activeButton.classList.remove('active');
        activeButton = thirdButton;
        activeButton.classList.add('active');
      } else if (k === 1) {
        currentPosition = 0;

        page = k;
        firstButton.innerText = page;
        secondButton.innerText = page + 1;
        thirdButton.innerText = page + 2;
        afterButton.innerText = page + 3;

        activeButton.classList.remove('active');
        activeButton = secondButton;
        activeButton.classList.add('active');
      }
    }

    resize();

    window.addEventListener('resize', resize);

    firstButton.onclick = () => {
      if (currentPosition !== 0 && position === currentPosition) {
        currentPosition = Math.min(currentPosition + width * quantity, 0);

        page -= 1;
        firstButton.innerText = page;
        secondButton.innerText = page + 1;
        thirdButton.innerText = page + 2;
        afterButton.innerText = page + 3;
      }

      position = currentPosition;
      cardsContainer.style.marginLeft = `${position}px`;

      activeButton.classList.remove('active');
      activeButton = firstButton;
      activeButton.classList.add('active');
    };

    secondButton.onclick = () => {
      position = currentPosition - width * quantity;
      cardsContainer.style.marginLeft = `${position}px`;

      activeButton.classList.remove('active');
      activeButton = secondButton;
      activeButton.classList.add('active');
    };

    thirdButton.onclick = () => {
      position = currentPosition - width * 2 * quantity;
      cardsContainer.style.marginLeft = `${position}px`;


      activeButton.classList.remove('active');
      activeButton = thirdButton;
      activeButton.classList.add('active');
    };

    afterButton.onclick = () => {
      const buttons = buttonsContainer.getElementsByTagName('BUTTON');
      if ((position / -width) + (quantity * 2) > pageCount * count) {
        pageCount += 1;
        const data = getNextData(this.nextToken);

        this.changeThisData(data).then(() => {
          this.addCards(count);
        });
      }

      if (position + width * quantity * 2 < currentPosition) {
        currentPosition -= width * quantity;
        position = currentPosition - width * 3 * quantity;

        page += 1;
        firstButton.innerText = page;
        secondButton.innerText = page + 1;
        thirdButton.innerText = page + 2;
        afterButton.innerText = page + 3;

        activeButton.classList.remove('active');
        activeButton = afterButton;
        activeButton.classList.add('active');
      } else if (buttons.length === 3) {
        thirdButton.innerText = page + 2;
        afterButton.innerText = page + 3;

        buttonsContainer.insertBefore(thirdButton, afterButton);
        position = currentPosition - width * 2 * quantity;

        activeButton.classList.remove('active');
        activeButton = thirdButton;
        activeButton.classList.add('active');
      } else if (buttons.length === 2) {
        secondButton.innerText = page + 1;
        afterButton.innerText = page + 2;

        buttonsContainer.insertBefore(secondButton, afterButton);
        position = currentPosition - width * quantity;

        activeButton.classList.remove('active');
        activeButton = secondButton;
        activeButton.classList.add('active');
      } else if (!afterButton.classList.contains('active')) {
        position = currentPosition - width * 3 * quantity;
        activeButton.classList.remove('active');
        activeButton = afterButton;
        activeButton.classList.add('active');
      }

      cardsContainer.style.marginLeft = `${position}px`;
    };

    const currentThis = this;

    function cardsContainerClick(e) {
      if (e.target.classList.contains('card-img')) return;
      let firstPos;
      let secondPos;
      let pos = position;

      if (e.clientX) {
        firstPos = e.clientX;
      } else if (e.targetTouches) {
        firstPos = e.targetTouches[0].clientX;
      }

      function move(ev) {
        if (ev.clientX) {
          secondPos = ev.clientX;
        } else if (ev.targetTouches) {
          secondPos = ev.targetTouches[0].clientX;
        }
        pos += (secondPos - firstPos) * 1.5;
        cardsContainer.style.marginLeft = `${pos}px`;
      }

      function cardsContainerMove(ev) {
        move(ev);
        firstPos = secondPos;
      }

      cardsContainer.addEventListener('mousemove', cardsContainerMove);
      cardsContainer.addEventListener('touchmove', cardsContainerMove);

      buttonsContainer.insertBefore(secondButton, afterButton);
      buttonsContainer.insertBefore(thirdButton, afterButton);
      firstButton.innerText = page;
      secondButton.innerText = page + 1;
      thirdButton.innerText = page + 2;
      afterButton.innerText = page + 3;

      function cancelMove() {
        cardsContainer.removeEventListener('mousemove', cardsContainerMove);
        cardsContainer.removeEventListener('touchmove', cardsContainerMove);

        if ((position / -width) + quantity + 2 > pageCount * count) {
          pageCount += 1;
          const data = getNextData(this.nextToken);

          currentThis.changeThisData(data).then(() => {
            currentThis.addCards(count);
          });
        }

        position = Math.round(pos / width) * width;

        const k = Math.floor(position / (-width * quantity));

        if (k >= 3 || afterButton.classList.contains(!'active')) {
          currentPosition = position + width * quantity * 3;

          page = k - 2;
          firstButton.innerText = page;
          secondButton.innerText = page + 1;
          thirdButton.innerText = page + 2;
          afterButton.innerText = page + 3;

          activeButton.classList.remove('active');
          activeButton = afterButton;
          activeButton.classList.add('active');
        } else if (k === 2) {
          currentPosition = 0;

          page = k - 1;
          firstButton.innerText = page;
          secondButton.innerText = page + 1;
          thirdButton.innerText = page + 2;
          afterButton.innerText = page + 3;

          activeButton.classList.remove('active');
          activeButton = thirdButton;
          activeButton.classList.add('active');
        } else if (k === 1) {
          currentPosition = 0;

          page = k;
          firstButton.innerText = page;
          secondButton.innerText = page + 1;
          thirdButton.innerText = page + 2;
          afterButton.innerText = page + 3;

          activeButton.classList.remove('active');
          activeButton = secondButton;
          activeButton.classList.add('active');
        } else {
          currentPosition = 0;
          page = 1;

          firstButton.innerText = page;
          secondButton.innerText = page + 1;
          thirdButton.innerText = page + 2;
          afterButton.innerText = page + 3;
          activeButton.classList.remove('active');
          activeButton = firstButton;
          activeButton.classList.add('active');
        }
        if (position > 0) {
          position = 0;
        }

        cardsContainer.style.marginLeft = `${position}px`;

        document.removeEventListener('mouseup', cancelMove);
        document.removeEventListener('touchend', cancelMove);
      }

      document.addEventListener('mouseup', cancelMove);
      document.addEventListener('touchend', cancelMove);
    }

    cardsContainer.addEventListener('mousedown', cardsContainerClick);
    cardsContainer.addEventListener('touchstart', cardsContainerClick);

    buttonsContainer.innerHTML = '';
    buttonsContainer.appendChild(firstButton);
    buttonsContainer.appendChild(afterButton);
    buttonsContainer.appendChild(toolTip);
  }
}
