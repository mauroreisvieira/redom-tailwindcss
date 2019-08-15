import { el, mount } from "redom";
import Prism from "prismjs";
import Markdown from "../components/Markdown.js";

export default class Main {
    constructor() {
        const file = "docs/v3/guide/elements.md";
        this.el = el("main#main");
        new Markdown(file, this.content).then(response => {
            this.content = el("div.content");
            this.content.innerHTML = response;
            mount(this.el, this.content);
            Prism.highlightAll();
        });
    }
}
