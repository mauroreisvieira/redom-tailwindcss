import { el } from "redom";
import TopNav from "./../TopNav/index";

import { topNav } from "../../../.redomdoc/config.js";

export default class Header {
    constructor() {
        this.el = el(
            "header#header",
            {
                class: "flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-40 items-center",
            },
            el(
                "div",
                { class: "flex w-full max-w-screen-xl mx-auto" },
                el(
                    "div",
                    {
                        class: "lg:w-1/4 xl:w-1/5",
                    },
                    (this.logo = el(
                        "a#logo",
                        {
                            class: "flex items-center h-16 font-light text-2xl px-6",
                            href: "/",
                        },
                        "Redom:js"
                    ))
                ),
                el(
                    "div",
                    {
                        class: "items-center flex flex-grow justify-end lg:w-3/4 xl:w-4/5 px-6",
                    },
                    el(
                        "div",
                        (this.nav = new TopNav())
                    )
                )
            )
        );

        this.nav.update(topNav);
    }
}
