import { el } from 'redom';

export default class NavLink {
    constructor () {
        this.el = el('a.nav__link');
    }

    update (data) {
        const { text, path, link, _current } = data;
        this.el.href = path || link;
        this.el.title = text;
        this.el.textContent = text;
        if (_current) {
            this.el.classList.add('is-active');
        } else {
            this.el.classList.remove('is-active');
        }
    }
}
