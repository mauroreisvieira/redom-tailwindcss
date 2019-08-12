import { mount, unmount } from 'https://redom.js.org/redom.es.min.js';
import { App } from './App.js';

const app = new App();
mount(document.body, app);
unmount(document.body, app);
mount(document.body, app);
mount(document.body, app);
