import { el, list } from "redom";

class Link {
    constructor() {
        this.el = el("a", {
            class: "px-2 py-1 mb-3 lg:mb-1 block hover:text-gray-900 text-gray-700 font-medium",
        });
    }

    update(data) {
        const { text, path, _current } = data;
        this.el.href = path;
        this.el.title = text;
        this.el.textContent = text;

        if (_current) {
            this.el.classList.add("text-primary");
        } else {
            this.el.classList.remove("text-primary");
        }
    }
}

export default class SideNav {
    constructor(data) {
        this.el = el("nav", {
            class:
                "px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 mt-12",
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
