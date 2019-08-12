import { mount, unmount } from 'https://redom.js.org/redom.es.min.js';
import { App } from './scripts/App.js';

const app = new App();
console.log(app);
mount(document.body, app);
