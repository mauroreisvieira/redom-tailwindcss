import { el, mount } from "redom";
import Prism from "prismjs";
import Markdown from "../components/Markdown.js";
import Nav from './Nav.js';

export default class Main {
    constructor() {
        const file = "docs/v3/guide/elements.md";
        this.el = el("main.main#main", {},
            this.sidebar = el("div.sidebar", {}, new Nav()),
            this.content = el("div.content", {})
        );
        new Markdown(file, this.content).then(response => {
            this.content.innerHTML = response;
            mount(this.el, this.content);
            Prism.highlightAll();
        });
    }
}
