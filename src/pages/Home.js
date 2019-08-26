import { el, list, svg } from "redom";
import Header from "./../components/Header";
import Main from "./../components/Main";

import { contributors, sponsors } from "../../.redomdoc/config.js";
import "./../styles/home.css";

export default class Home {
    constructor() {
        this.isContributor = false;
        this.isSponsor = false;
        this.el = el(
            "div",
            {},
            el(
                "div#hero",
                {
                    class: "z-40 w-full max-w-4xl relative mx-auto px-6 py-24 mb-40",
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
                        { class: "text-4xl font-light leading-tight" },
                        "Tiny (2 KB) turboboosted JavaScript library for creating user interfaces."
                    ),
                    el(
                        "div",
                        { class: "mt-12" },
                        el(
                            "a",
                            {
                                href: "#installation",
                                class:
                                    "sm:inline-flex flex justify-center mb-4 uppercase rounded-full px-8 py-3 sm:mr-4 border border-primary text-base font-semibold text-primary",
                            },
                            "Get Started"
                        ),
                        el(
                            "a",
                            {
                                href: "https://github.com/redom/redom/",
                                target: "_blank",
                                class:
                                    "sm:inline-flex flex justify-center uppercase rounded-full px-8 py-3 border border-gray-200 bg-gray-200 text-base font-semibold text-gray-700",
                            },
                            "Github"
                        )
                    )
                )
            ),
            this.isContributor &&
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
                        el("h2", { class: "text-xl font-bold mb-6" }, "Contributors"),
                        el("p", { class: "mb-16" }, "This project exists thanks to all the people who contribute."),
                        (this.contributors = list("div.flex.flex-wrap.justify-center", Contributor, "id"))
                    )
                ),
            this.isSponsor &&
                el(
                    "div#sponsors",
                    { class: "text-center text-gray-700" },
                    el(
                        "div",
                        {
                            class: "w-full max-w-6xl relative mx-auto px-6 pt-16 pb-40",
                        },
                        el("h2", { class: "text-xl font-bold mb-6" }, "Sponsors"),
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
                                    "mb-4 rounded-full px-6 py-2 sm:mr-4 border border-primary text-sm font-semibold text-primary",
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
            mode: "no-cors",
        })
            .then(response => response.json())
            .then(results => {
                console.log(results);
                this.isContributor = true;
                this.contributors.update(results);
            })
            .catch(error => {
                console.warn(error);
            });
    }

    getSponsors() {
        fetch(sponsors, {
            mode: "no-cors",
        })
            .then(results => {
                console.log(results);
                this.isSponsor = true;
                this.sponsors.update(results);
            })
            .catch(error => {
                console.warn(error);
            });
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
