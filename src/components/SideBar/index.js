import { el, list, setAttr } from "redom";

import { sideNav } from "../../../.redomdoc/config.js";

class Link {
    constructor() {
        this.el = el("a", {});
    }

    update(data) {
        const { text, path, _current } = data;
        this.el.href = path;
        this.el.title = text;
        this.el.textContent = text;

        if (_current) {
            setAttr(this.el, {
                class: "py-1 mb-3 lg:mb-1 block text-primary",
            });
        } else {
            setAttr(this.el, {
                class: "py-1 mb-3 lg:mb-1 block hover:text-gray-900 text-gray-700",
            });
        }
    }
}

export default class SideBar {
    constructor() {
        this.onSearch = this.onSearch.bind(this);

        this.el = el(
            "div",
            {
                class: "px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 mt-12",
            },
            (this.search = el("input", {
                class:
                    "transition border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-sm bg-gray-200 py-3 pr-4 pl-4 mb-6 block w-full appearance-none leading-normal",
                placeholder: "Search docs...",
                type: "text",
                value: "",
                ariaLabel: "search input",
            })),
            (this.nav = el("nav", {
                role: "navigation",
            }))
        );

        this.list = list(this.nav, Link);
        this.search.oninput = evt => {
            this.onSearch(this.search.value);
        };
    }

    onSearch(value) {
        if (value) {
            this.update(sideNav.filter(item => item.text.toUpperCase().includes(value.toUpperCase())), this._current);
        } else {
            this.update(sideNav, this._current);
        }
    }

    update(data, current) {
        this._current = current;
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
