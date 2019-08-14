module.exports = {
    themeConfig: {
        accentColor: "#f00",
        themeColor: "#f00",
    },
    search: {
        searchMaxSuggestions: 10,
    },
    algolia: {
        applicationID: "<APPLICATION_ID>",
        apiKey: "<API_KEY>",
        index: "<INDEX_NAME>",
    },
    sidebar: [
        {
            text: "Mouning",
            link: "docs/v3/guide/mounting.md",
            meta: false,
            children: [],
        },
        {
            text: "Elements",
            link: "docs/v3/guide/elements.md",
            meta: false,
            children: [],
        }
    ],
};
