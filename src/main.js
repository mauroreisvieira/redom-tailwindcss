import { el, mount } from 'redom';

import Header from './components/Header/index';
import Main from './components/Main/index';
import App from './components/App.js';

import * as data from '../.redomdoc/config.js';
import './styles/main.scss';

const styles = el('style', {}, 'body { background: red; }');
mount(document.head, styles);
mount(document.body, new App(data));
