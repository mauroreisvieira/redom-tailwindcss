import { el } from 'redom';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js';
import Main from './layout/Main.js';

export class App {
    constructor () {
        this.el = el('div#app', {},
            new Header,
            new Main,
            new Footer
        );
    }
}
