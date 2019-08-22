import { el, list } from "redom";

class Link {
    constructor() {
        this.el = el("a", {
            class: "px-2 -mx-2 py-1 transition-fast relative block text-teal-600 font-medium",
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

export default class SideNav {
    constructor(data) {
        this.el = el("nav", {
            class:
                "h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent",
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
