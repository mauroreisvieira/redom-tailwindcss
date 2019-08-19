import { el, mount } from "redom";
import Prism from "prismjs";
import Markdown from "./../Markdown/index";
import Nav from './../Nav/index';

export default class Main {
    constructor(data) {
        const { sideNav } = data;
        console.log(sideNav);
        const file = "docs/v3/guide/elements.md";
        this.el = el("main.main#main", {},
            this.sidebar = el("div.sidebar", {}, this.nav = new Nav()),
            this.content = el("div.content", {})
        );
        this.nav.update(sideNav);
        this.update(file);
    }

    update (file) {
        new Markdown(file, this.content).then(response => {
            this.content.innerHTML = response;
            mount(this.el, this.content);
            Prism.highlightAll();
        });
    }
}
