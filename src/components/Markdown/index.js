import { el, setChildren } from "redom";
import { Remarkable } from "remarkable";
import Prism from "prismjs";

import { Styles } from './../../utils/Styles.js';

export default class Markdown {
    constructor(path, content) {
        this.parent = content;
        new Promise((resolve, reject) => {
            return fetch(window.location.origin + window.location.pathname + path)
                .then(response => {
                    return response.text();
                })
                .then(result => {
                    this.md = new Remarkable({
                        langPrefix: "hljs language-",
                    });
                    this.content = el("div.markdown-doc", {});
                    this.content.innerHTML = this.md.render(result)
                    setChildren(this.parent, this.content);
                }).then(response => {
                    Prism.highlightAll();
                });
        });
    }
}
