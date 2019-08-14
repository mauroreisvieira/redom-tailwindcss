import { el } from 'https://redom.js.org/redom.es.min.js';
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
