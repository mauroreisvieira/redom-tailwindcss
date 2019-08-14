import { mount, unmount, setStyle } from 'https://redom.js.org/redom.es.min.js';
import { App } from './scripts/App.js';
import { Header as Style } from './scripts/styles/Index.js'

const app = new App();
console.log(app);
setStyle(document.body, Style)
mount(document.body, app);
