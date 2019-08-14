import { el } from 'https://redom.js.org/redom.es.min.js';
// import Remarkable from 'remarkable'
// import Prism from 'prismjs'

// import Sidebar from './Sidebar.js';

export default class Main {
    constructor (path) {
        // const md = new Remarkable({
        //     langPrefix: 'hljs language-'
        // });

        // fetch(path)
        // .then(response => response.text())
        // .then(content => {
        //     this.markdown = md.render(content);
        //     Prism.highlightAll();
        // });

        this.el = el('main', {}, el('div.content'));
    }
}
