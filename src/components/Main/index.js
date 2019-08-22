import { el, mount, setChildren } from "redom";
import Markdown from "./../Markdown/index";
import SideNav from "./../SideNav/index";

export default class Main {
    constructor(sideNav) {
        const current = sideNav.filter(item => item.path === window.location.hash)[0];
        this.url = current.link || "/";

        this.el = el(
            "main#main",
            {
                class: " lg:flex w-full max-w-screen-xl mx-auto px-6 -mx-6 pt-24 pb-16 lg:pt-28",
            },
            el(
                "div#sidebar",
                {
                    class:
                        "hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5",
                },
                (this.sideNav = new SideNav())
            ),
            (this.content = el("div#content", {
                class: "min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5",
            }))
        );
        this.sideNav.update(sideNav, current.path);
        this.update();
    }

    update() {
        new Markdown(this.url, this.content);
    }
}
