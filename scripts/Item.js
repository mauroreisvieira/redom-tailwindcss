import { el } from 'https://redom.js.org/redom.es.min.js';

export class Item {
  constructor () {
    this.el = el('li');
  }

 update (item) {
    console.log(item);
    this.el.textContent = item.title;
  }
}
