import { el, mount, router } from 'redom';
import Header from './Header/index';
import Main from './Main/index';

export default class App {
    constructor (data) {
        const { topNav, sideNav } = data;
        this.el = el('div#app', {},
            this.header = new Header(topNav),
            this.main = new Main(sideNav)
        );
    }
}
