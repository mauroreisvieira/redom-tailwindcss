import { mount } from 'redom';
import { App } from './scripts/App.js';

import * as data from '../.redomdoc/config.js';
import './styles/main.scss';

const app = new App(data);
mount(document.body, app);
