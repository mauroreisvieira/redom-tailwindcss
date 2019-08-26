const fetch = require("node-fetch");
const fs = require("fs");
const glob = require("glob");

getContributors();
getOpenCollective();
getRoutes();

function getContributors() {
    fetch("https://api.github.com/repos/redom/redom/contributors")
        .then(res => res.json())
        .then(json => {
            fs.writeFileSync(".redomdoc/contributors.json", JSON.stringify(json, null, 4));
        });
}

function getOpenCollective() {
    fetch("https://opencollective.com/redom/members/all.json")
        .then(res => res.json())
        .then(json => {
            fs.writeFileSync(".redomdoc/sponsors.json", JSON.stringify(json, null, 4));
        });
}

function getRoutes() {
    glob("docs/**/*.md", {}, function(er, files) {
        console.log(files);
    });
}
