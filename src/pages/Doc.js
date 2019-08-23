import { el, mount, router } from 'redom';
import Header from './../components/Header';
import Main from './../components/Main';

export default class Doc {
    constructor () {
        this.el = el('div', { class: "bg-gray-100" },
            new Header(),
            new Main()
        );
    }
}
