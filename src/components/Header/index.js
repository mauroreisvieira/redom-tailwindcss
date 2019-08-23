import { el, svg } from "redom";
import TopNav from "./../TopNav";

import { topNav, version } from "../../../.redomdoc/config.js";

export default class Header {
    constructor() {
        this.el = el(
            "header#header",
            {
                class: "flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-40 items-center",
            },
            el(
                "div",
                { class: "flex w-full mx-auto" },
                el(
                    "div",
                    {
                        class: "lg:w-1/4",
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
                        class: " max-w-screen-xl items-center flex flex-grow justify-end lg:w-3/4 px-6",
                    },
                    el(
                        "div",
                        { class: "relative" },
                        el(
                            "select",
                            {
                                class:
                                    "appearance-none block bg-white pl-2 pr-8 py-1 text-gray-500 font-medium text-base focus:outline-none",
                            },
                            el(
                                "option",
                                {
                                    value: "v3",
                                },
                                version
                            )
                        ),
                        el(
                            "div",
                            {
                                class:
                                    "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500",
                            },
                            svg("svg",
                                {
                                    class: "fill-current h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20"
                                },
                                svg("path", {
                                    d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                })
                            )
                        )
                    ),
                    el("div", (this.nav = new TopNav()))
                )
            )
        );
        // this.logo.innerHTML = ;
        this.nav.update(topNav);
    }
}
