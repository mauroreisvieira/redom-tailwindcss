import { el } from 'redom';
import { dispatch } from './../../utils/dispatch';

export default class NavLink {
    constructor () {
        this.el = el('a.nav__link');
    }

    update (data) {
        const { text, path, _current } = data;

        this.el.href = path;
        this.el.textContent = text;
        if (_current) {
            this.el.classList.add('is-active');
        } else {
            this.el.classList.remove('is-active');
        }
    }
}
