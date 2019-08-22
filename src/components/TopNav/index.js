import { el, list } from "redom";

class Link {
    constructor() {
        this.el = el("a", {
            class: "block flex items-center hover:text-gray-700 mr-5",
        });
    }

    update(data) {
        const { text, path, link, _current } = data;
        this.el.href = path || link;
        this.el.title = text;
        this.el.textContent = text;
        if (_current) {
            this.el.classList.add("is-active");
        } else {
            this.el.classList.remove("is-active");
        }
    }
}

export default class TopNav {
    constructor(data) {
        this.el = el("nav", {
            class: "flex justify-start items-center text-gray-500",
        });
        this.list = list(this.el, Link, "id");
    }

    update(data, current) {
        this.list.update(
            data.map(item => {
                return {
                    _current: item.path === current,
                    ...item,
                };
            })
        );
    }
}
