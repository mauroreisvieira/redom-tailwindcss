import { el, list, setChildren, setAttr } from "redom";

import { sideNav, startPage } from "../../../.redomdoc/config.js";

class Link {
    constructor() {
        this.el = el("a", {});
    }

    update(data) {
        const { text, path, children } = data;

        this.el = el("ul", { class: "uppercase" }, text);

        if (path) {
            this.el = el(
                "li",
                {},
                (this.link = el(
                    "a",
                    {
                        title: text,
                        href: path,
                    },
                    el("span", {}, text)
                ))
            );
        }

        if (children.length) {
            this.el = el(
                "li",
                {},
                el(
                    "span",
                    {
                        class: "mb-3 lg:mb-2 text-gray-500 uppercase tracking-wide font-bold text-sm lg:text-xs",
                    },
                    text
                ),
                (this.nav = el("ul", {
                    class: "mt-2 mb-3 text-blue-700",
                }))
            );
            this.list = list(this.nav, Link);
            this.list.update(children);
        }


        if (path === location.hash) {
            setAttr(this.el, {
                class: "py-1 mb-3 lg:mb-1 block text-primary",
            });
        } else {
            setAttr(this.el, {
                class: "py-1 mb-3 lg:mb-1 block hover:text-gray-900 text-gray-700",
            });
        }

        this.el.onclick = evt => {
            evt.stopPropagation();
            const event = new CustomEvent("on:click-item", { detail: data, bubbles: true });
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
                class: "h-full flex flex-col px-6 overflow-y-auto text-base lg:text-sm mt-24 lg:mt-12 pb-24",
            },
            el(
                "div",
                { class: "hidden lg:flex flex-col sticky top-0 pb-4 mb-6 bg-gray-100" },
                el(
                    "a",
                    {
                        href: startPage,
                        title: "Re:dom",
                        class: "self-center w-24 mb-8",
                    },
                    (this.logo = el("img", {
                        src: "./static/images/redomjs.svg",
                        alt: "Re:dom Logo",
                    }))
                ),
                (this.search = el("input", {
                    class:
                        "border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-sm bg-gray-200 py-3 pr-4 pl-4 block w-full appearance-none leading-normal",
                    placeholder: 'Search the docs (Press "Enter" to focus)',
                    type: "text",
                    value: "",
                    ariaLabel: "search input",
                }))
            ),
            el(
                "nav",
                {
                    role: "navigation",
                },
                (this.nav = el("ul"))
            )
        );


        this.list = list(this.nav, Link);

        document.addEventListener("keypress", (evt) => {
            if (evt.key === "Enter") {
                this.search.focus();
            }
        });

        this.search.oninput = evt => {
            this.onSearch(this.search.value);
        };

        this.el.addEventListener("on:click-item", e => {
            this.search.value = "";
        });
    }

    onSearch(value) {
        if (value) {
            const results = [];
            sideNav.map(item => {
                if (item.text.toUpperCase().includes(value.toUpperCase())) {
                    results.push(item);
                }
                if (item.children.length) {
                    item.children.map(subItem => {
                        if (subItem.text.toUpperCase().includes(value.toUpperCase())) {
                            results.push(subItem);
                        }
                    });
                }
            });
            this.update(results, this._current);
        } else {
            this.update(sideNav, this._current);
        }
    }

    update(data) {
        this.list.update(data);
    }
}
