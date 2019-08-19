import { el } from 'redom';
import Nav from './../Nav/index';

export default class Header {
    constructor(data) {
        const { topNav } = data;
        this.el = el('header#header.header', {},
            el('div.header__logo', {}, el('a#logo', { href: "/"}, 'Redom:js')),
            el('div.header__nav', {}, this.nav = new Nav())
        );

        this.nav.update(topNav);
    }
}
