import { el, mount } from 'redom';

import Header from './components/Header/index';
import Main from './components/Main/index';
import App from './components/App.js';
import { Styles } from './utils/Styles.js';

import * as data from '../.redomdoc/config.js';
import './styles/main.scss';

const { themeConfig  } = data;

Styles(`
    body {
        background: ${themeConfig.bgColor};
    }

    h2 {
        color: ${themeConfig.primaryColor};
    }
`);

mount(document.body, new App(data));
