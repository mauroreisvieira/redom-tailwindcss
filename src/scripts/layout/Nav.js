import { el, list } from 'redom';

class Link {
    constructor() {
        this.el = el('a.nav__link', { href: '/'});
    }

    update (text) {
        this.el.textContent = text;
    }
}

export default class Nav {
    constructor () {
        this.el = list('nav.nav', Link);
        this.el.update(['Lorem 1', 'Lorem 2', 'Lorem 3']);
    }
}
