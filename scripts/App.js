import { el } from 'https://redom.js.org/redom.es.min.js';
import { Hello } from './Hello.js';
import { List } from './List.js';

export class App {
  constructor () {
    const btn = el(
        'button.btn', {
            onclick: (e) => {
              console.log(e);
            }
        },
        'Click Me'
    );

    this.list = new List();
    this.el = el('div#app',
      this.hello = new Hello('RE:DOM'),
      this.list,
      btn
    );
  }

  onClick = () => {
      console.log('Click Me');
  }

  onmount () {
    console.log('mounted App');
  }

  onremount () {
    console.log('remounted App');
  }

  onunmount () {
    console.log('unmounted App');
  }
}
