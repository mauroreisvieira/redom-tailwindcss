import { el, mount } from 'redom';

import Header from './components/Header/index';
import Main from './components/Main/index';
import App from './components/App.js';

import * as data from '../.redomdoc/config.js';

import "./styles/prism.css";
import "./styles/tailwind.css";
import "./styles/markdown.css";

const { themeConfig  } = data;

mount(document.body, new App(data));
