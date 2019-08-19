import { el, list } from 'redom';
import NavLink from './../NavLink/index';

export default class Nav {
    constructor () {
        this.el = list('.nav', NavLink, 'id');
    }

    update (data) {
        this.el.update(data.map(item => {
            return {
                ...item,
            };
        }));
    }
}
