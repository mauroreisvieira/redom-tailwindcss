import { el, setStyle, mount } from 'https://redom.js.org/redom.es.min.js';

class Header {
    constructor() {

        this.el = el('header.header', {},
            el('div.header__logo', 'Redomjs'),
            el('div.header__nav', 'NAV')
        );
    }
}

class Footer {
    constructor() {
        this.el = el('footer', 'Footer');
    }
}

// import Remarkable from 'remarkable'
// import Prism from 'prismjs'

// import Sidebar from './Sidebar.js';

class Main {
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

class App {
    constructor () {
        this.el = el('div#app', {},
        new Header,
        new Main,
        new Footer
        );
    }
}

const Header$1 = {
    position: 'fixed',
    width: '100%',
    top: '0',
    backgroundColor: '#fff',
    height: '40px',
    padding: '10px 60px',
    position: 'relative',
    zIndex: '100',
    boxShadow: '0 0 1px rgba(0,0,0,0.25)',
};

const app = new App();
console.log(app);
setStyle(document.body, Header$1);
mount(document.body, app);
