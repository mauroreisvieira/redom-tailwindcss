import { el, mount, setChildren } from "redom";
import Markdown from "./../Markdown/index";
import Nav from './../Nav/index';

export default class Main {
    constructor(sideNav) {
        const current = sideNav.filter( item => item.path === window.location.hash)[0];
        this.url = current.link || '/';

        this.el = el("main.main#main", {},
            this.sidebar = el("div.sidebar", {}, this.nav = new Nav()),
            this.content = el("div.content", {})
        );
        this.nav.update(sideNav, current.path);
        this.update();
    }

    update () {
        new Markdown(this.url, this.content);
    }
}
