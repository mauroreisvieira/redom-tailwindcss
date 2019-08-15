import { Remarkable } from "remarkable";

export default class Markdown {
    constructor(path, content) {
        return new Promise((resolve, reject) => {
            return fetch(window.location.origin + window.location.pathname + path)
                .then(response => {
                    return response.text();
                })
                .then(result => {
                    this.md = new Remarkable({
                        langPrefix: "hljs language-",
                    });
                    resolve(this.md.render(result));
                });
        });
    }
}
