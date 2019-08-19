import { el, mount, router } from 'redom';
import Header from './components/Header/index';
import Main from './components/Main/index';

export class App {
    constructor (data) {
        this.el = el('div#app', {},
            this.header = new Header(data),
            this.main = new Main(data)
        );

        this.data = data;
    }
}

