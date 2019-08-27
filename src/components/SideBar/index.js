import { el, list, setAttr } from "redom";

import { sideNav, startPage } from "../../../.redomdoc/config.js";

class Link {
    constructor() {
        this.el = el("a", {});
    }

    update(data) {
        const { text, path, children } = data;

        this.el.href = path;
        this.el.title = text;
        this.el.textContent = text;

        if (children.length) {
            this.el = this.nav = el("nav.ml-5", {
                role: "navigation",
            });
            this.list = list(this.nav, Link);
            this.list.update(
                children.map(item => {
                    const { path } = item;
                    return {
                        ...item,
                    };
                })
            );
        } else {
            if (path === location.hash) {
                setAttr(this.el, {
                    class: "py-1 mb-3 lg:mb-1 block text-primary",
                });
            } else {
                setAttr(this.el, {
                    class: "py-1 mb-3 lg:mb-1 block hover:text-gray-900 text-gray-700",
                });
            }
        }

        this.el.onclick = e => {
            const event = new CustomEvent("on-item-click", { detail: data, bubbles: true });
            this.el.dispatchEvent(event);
        };
    }
}

export default class SideBar {
    constructor() {
        this.onSearch = this.onSearch.bind(this);

        this.el = el(
            "div",
            {
                class: "flex flex-col px-6 overflow-y-auto text-base lg:text-sm mt-24 lg:mt-12",
            },
            el(
                "a",
                {
                    href: startPage,
                    title: "Re:dom",
                    class: "self-center w-24 mb-8 hidden lg:flex",
                },
                (this.logo = el("img", {
                    src: "./static/images/redomjs.svg",
                    alt: "Re:dom Logo",
                }))
            ),
            (this.search = el("input", {
                class:
                    "transition border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-sm bg-gray-200 py-3 pr-4 pl-4 mb-6 block w-full appearance-none leading-normal",
                placeholder: 'Search the docs (Press "/" to focus)',
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

        this.el.addEventListener("on-item-click", e => {
            this.search.value = "";
        });
    }

    onSearch(value) {
        if (value) {
            this.update(sideNav.filter(item => item.text.toUpperCase().includes(value.toUpperCase())), this._current);
        } else {
            this.update(sideNav, this._current);
        }
    }

    update(data) {
        this.list.update(
            data.map(item => {
                const { path } = item;
                return {
                    ...item,
                };
            })
        );
    }
}
