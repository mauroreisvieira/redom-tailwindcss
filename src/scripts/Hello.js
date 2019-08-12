import { el } from 'https://redom.js.org/redom.es.min.js';
import { Style } from '../styles/Hello.js';
export class Hello {
  constructor (name) {
    this.name = name;
    this.el = el('h1',
        {
            style: Style.Hello
        },
        `Hello ${this.name}!`
    );
  }
  onmount () {
    console.log('mounted Hello');
  }
  onremount () {
    console.log('remounted Hello');
  }
  onunmount () {
    console.log('unmounted Hello');
  }
}
