import { el, list } from 'redom';

export class Link {
    constructor () {
        this.el = el('a.nav__item', { href: '/'});
    }

    update (i) {
        console.log('Link');
        this.el.textContent = i;
    }
}

export default class Nav {
    constructor () {
        this.el = list('nav#nav.nav', Link);
        this.el.update(['Lorem 1', 'Lorem 2', 'Lorem 3']);
    }
}
