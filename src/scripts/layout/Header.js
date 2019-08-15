import { el } from 'redom';
import Nav from './Nav.js';

export default class Header {
    constructor() {

        console.log('Header');
        this.el = el('header#header.header', {},
            el('div.header__logo', {}, el('a#logo', { href: "/"}, 'Redom:js')),
            el('div.header__nav', {}, new Nav())
        );
    }
}
