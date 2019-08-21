import { el, list } from 'redom';
import NavLink from './../NavLink/index';

export default class Nav {
    constructor (data) {
        this.el = list('.nav', NavLink, 'id');
    }

    update (data, current) {
        this.el.update(data.map(item => {
            return {
                _current: item.path === current,
                ...item,
            };
        }));
    }
}
