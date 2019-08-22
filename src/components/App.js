import { el, mount, router } from 'redom';
import Header from './Header/index';
import Main from './Main/index';

export default class App {
    constructor () {
        this.el = el('div#app', {},
            this.header = new Header(),
            this.main = new Main()
        );
    }
}
