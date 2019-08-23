import { el, mount, setChildren } from "redom";
import Markdown from "./../Markdown";
import SideNav from "./../SideNav";

import { sideNav } from '../../../.redomdoc/config.js';

export default class Main {
    constructor() {
        this.el = el(
            "main#main",
            {
                class: "lg:flex w-full mx-auto m-auto",
            },
            el(
                "div#sidebar",
                {
                    class:
                        "hidden fixed top-0 h-full w-full lg:sticky lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block",
                },
                (this.sideNav = new SideNav())
            ),
            (this.content = el("div#content", {
                class: "bg-white min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 px-6",
            })),
        );

        this.update();
    }

    update() {
        const current = sideNav.filter(item => item.path === window.location.hash)[0];
        this.sideNav.update(sideNav, current.path);
        new Markdown(current.link, this.content);
    }
}
