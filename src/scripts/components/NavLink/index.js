import { el } from 'redom';
import { dispatch } from './../../utils/dispatch';

export default class NavLink {
    constructor () {
        this.el = el('.nav__link');
        this.el.onclick = e => {
            dispatch(this, 'section', this.data.id);
        };

    }
    update (data) {
        const { text, _current } = data;
        this.el.textContent = text;

        if (_current) {
            this.el.classList.add('current');
        } else {
            this.el.classList.remove('current');
        }

        this.data = data;
    }
}
