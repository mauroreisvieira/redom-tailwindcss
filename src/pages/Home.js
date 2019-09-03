import { el, svg } from "redom";

import "./../styles/home.css";

export default class Home {
    constructor() {
        this.el = el(
            "div",
            {},
            el(
                "div#hero",
                {
                    class: "z-40 w-full relative mx-auto px-6 pt-8 sm:pb-24 mb-16",
                },
                el(
                    "div",
                    {
                        class: "flex flex-col px-6 mx-auto items-center  max-w-4xl ",
                    },
                    el("img", {
                        src: "./static/images/mddoks.svg",
                        alt: "Re:dom Logo",
                        class: "self-center w-56 sm:w-64  my-12",
                    }),
                    el(
                        "h1",
                        { class: "text-2xl sm:text-4xl font-light leading-tight text-center" },
                        "Documentation with RE:DOM and Tailwind CSS"
                    ),
                    el(
                        "div",
                        { class: "flex flex-col sm:flex-row mt-12 w-full justify-center" },
                        el(
                            "a",
                            {
                                href: "#installation",
                                class:
                                    "sm:inline-flex items-center tracking-wider flex justify-center uppercase rounded-full px-8 py-3 sm:mr-4 mb-4 border border-primary text-base font-semibold text-primary",
                            },
                            "Get Started"
                        ),
                        el(
                            "a",
                            {
                                href: "https://github.com/redom/redom/",
                                target: "_blank",
                                class:
                                    "sm:inline-flex items-center tracking-wider flex justify-center uppercase rounded-full px-8 pl-2 py-2 mb-4 border border-gray-200 bg-gray-200 text-base font-semibold text-gray-700",
                            },
                            svg(
                                "svg",
                                {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "fill-current w-8 h-8 mr-3",
                                    viewBox: "0 0 20 20",
                                },
                                svg("path", {
                                    d:
                                        "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0",
                                })
                            ),
                            "Github"
                        )
                    )
                )
            )
        );
    }
}
