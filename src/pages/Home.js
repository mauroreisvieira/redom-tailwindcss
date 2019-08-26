import { el, list, svg } from "redom";
import Header from "./../components/Header";
import Main from "./../components/Main";

import { contributors, sponsors } from "../../.redomdoc/config.js";
import "./../styles/home.css";

export default class Home {
    constructor() {
        this.isSponsor = false;
        this.el = el(
            "div",
            {},
            el(
                "div#hero",
                {
                    class: "z-40 w-full max-w-4xl relative mx-auto px-6 pt-16 pb-24 mb-24 sm:mb-40",
                },
                el(
                    "div",
                    {
                        class: "flex flex-col px-6 mx-auto",
                    },
                    el("img", {
                        src: "./static/images/redomjs.svg",
                        alt: "Re:dom Logo",
                        class: "self-center w-48 my-12",
                    }),
                    el(
                        "h1",
                        { class: "text-2xl sm:text-4xl font-light leading-tight" },
                        "Tiny (2 KB) turboboosted JavaScript library for creating user interfaces."
                    ),
                    el(
                        "div",
                        { class: "flex flex-col sm:flex-row mt-12" },
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
            ),
            el(
                "div#contributors",
                { class: "text-center relative text-gray-700" },
                svg(
                    "svg",
                    {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 1440 320",
                    },
                    svg("path", {
                        fill: "currentColor",
                        d:
                            "M0 288h48c48 0 144 0 240-5.3C384 277 480 267 576 240c96-27 192-69 288-69.3 96 .3 192 42.3 288 69.3s192 37 240 42.7l48 5.3v32H0z",
                    })
                ),
                el(
                    "div",
                    {
                        class: "w-full max-w-6xl relative mx-auto px-6 pt-16",
                    },
                    el("h2", { class: "text-gray-600 text-xl font-bold mb-4" }, "Contributors"),
                    el("p", { class: "mb-16" }, "This project exists thanks to all the people who contribute."),
                    (this.contributors = list("div.flex.flex-wrap.justify-center", Contributor, "id"))
                )
            ),
            el(
                "div#sponsors",
                { class: "text-center text-gray-700" },
                el(
                    "div",
                    {
                        class: "w-full max-w-6xl relative mx-auto px-6 pt-16 pb-40",
                    },
                    el("h2", { class: "text-gray-600 text-xl font-bold mb-4" }, "Sponsors"),
                    el(
                        "p",
                        { class: "mb-16" },
                        "Support this project by becoming a sponsor. Your logo will show up here with a link to your website."
                    ),
                    (this.sponsors = list("div.flex.flex-wrap.justify-center", Sponsor, "id")),
                    el(
                        "a",
                        {
                            href: "https://opencollective.com/redom#sponsor",
                            target: "_blank",
                            class:
                                "tracking-wider mb-4 rounded-full px-6 py-2 sm:mr-4 border border-primary text-sm font-semibold text-primary",
                        },
                        "Become a Sponsor!"
                    )
                )
            )
        );

        this.getContributors();
        this.getSponsors();
    }

    getContributors() {
        fetch(contributors, {
            credentials: "same-origin",
        })
            .then(response => response.json())
            .then(results => {
                this.contributors.update(results);
            })
            .catch(error => console.error(error))
    }

    getSponsors() {
        fetch(sponsors, {
            mode: "no-cors",
        })
            .then(results => {
                this.sponsors.update(results);
            })
            .catch(error => console.error(error))
    }
}

export class Contributor {
    constructor() {
        this.el = el("a");
    }

    update(data) {
        const { url, avatar_url } = data;
        this.el = el(
            "a",
            {
                href: url,
                target: "_blank",
                class: "my-2 mx-2",
            },
            el("img", {
                class: "w-10 h-10 rounded-full",
                src: avatar_url,
            })
        );
    }
}

export class Sponsor {
    constructor() {
        this.el = el("a");
    }

    update(data) {
        const { url, avatar_url } = data;
        this.el = el(
            "a",
            {
                href: url,
                target: "_blank",
                class: "my-2 mx-2",
            },
            el("img", {
                class: "w-10 h-10 rounded-full",
                src: avatar_url,
            })
        );
    }
}
