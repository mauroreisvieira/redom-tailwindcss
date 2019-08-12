import { el, list } from 'https://redom.js.org/redom.es.min.js';

class Item {
  constructor () {
    this.el = el('li');
  }

 update (item) {
    console.log(item);
    this.el.textContent = item.title;
  }
}

export class Menu {
    constructor () {
        this.el = list('ul', new Item(), 'id');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(items => {
            this.el.update(items.map( item => {
                return {
                    id: item.id,
                    title: item.name
                }
            }))
        });
    }
}
