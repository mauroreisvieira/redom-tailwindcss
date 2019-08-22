module.exports = {
    search: {
        searchMaxSuggestions: 10,
    },
    algolia: {
        applicationID: "<APPLICATION_ID>",
        apiKey: "<API_KEY>",
        index: "<INDEX_NAME>",
    },
    topNav: [
        {
            text: "Twitter",
            link: "https://www.twitter.com/"
        },
        {
            text: "Github",
            link: "https://www.github.com/"
        }
    ],
    sideNav: [
        {
            path: "#installation",
            text: "Installation",
            link: "docs/v3/guide/Installation.md",
            meta: false,
            children: [],
        },
        {
            path: "#introduction",
            text: "Introduction",
            link: "docs/v3/guide/introduction.md",
            meta: false,
            children: [],
        },
        {
            path: "#mounting",
            text: "Mouning",
            link: "docs/v3/guide/mounting.md",
            meta: false,
            children: [
                {
                    path: "#mounting",
                    text: "Mouning",
                    link: "docs/v3/guide/mounting.md",
                    meta: false,
                    children: [],
                }
            ],
        },
        {
            path: "#elements",
            text: "Elements",
            link: "docs/v3/guide/elements.md",
            meta: false,
            children: [],
        },
        {
            path: "#lifecycle",
            text: "Lifecycle",
            link: "docs/v3/guide/lifecycle.md",
            meta: false,
            children: [],
        }
    ],
};
