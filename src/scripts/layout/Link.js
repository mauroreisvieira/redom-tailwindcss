import { el } from 'redom';

export default class Link {
    constructor() {
        this.el = el('a.nav__item', { href: '/'});
    }

    update (text) {
        console.log('Link');
        this.el.textContent = text;
    }
}
