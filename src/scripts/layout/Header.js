import { el } from 'https://redom.js.org/redom.es.min.js';

export default class Header {
    constructor() {

        this.el = el('header.header', {},
            el('div.header__logo', 'Redomjs'),
            el('div.header__nav', 'NAV')
        );
    }
}
