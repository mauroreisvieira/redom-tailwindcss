import { el } from "redom";
import TopNav from "./../TopNav/index";

export default class Header {
    constructor(data) {
        this.el = el(
            "header#header",
            {
                class: "flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center",
            },
            el(
                "div",
                {
                    class: "lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8",
                },
                el(
                    "a#logo",
                    {
                        class: "flex items-center",
                        href: "/",
                    },
                    "Redom:js"
                )
            ),
            el(
                "div",
                {
                    class: "flex flex-grow lg:w-3/4 xl:w-4/5",
                },
                (this.nav = new TopNav())
            )
        );

        this.nav.update(data);
    }
}
