import { el } from 'redom';
import Nav from './../Nav/index';

import { Styles } from './../../utils/Styles.js';

export default class Header {
    constructor(data) {
        let vdom = `<div id="foo"><p><span>Hello!</span></p></div>`;
        let dom = this.render(vdom);
        console.log(dom);

        this.el = el('header#header.header', {},
            el('div.header__logo', {}, el('a#logo', { href: "/"}, 'Redom:js')),
            el('div.header__nav', {}, this.nav = new Nav())
        );

        this.nav.update(data);



        Styles(`
            .markdown-doc {
                border: 2px solid red;
                padding: 24px;
            }
        `);
    }

    render(vnode) {
        const aux = document.createElement('div');
        aux.innerHTML = vnode;
        console.dir(aux.childNodes[0]);
        const elm = aux.childNodes[0];
        let n = document.createElement(elm.nodeName);
        console.warn(n);
        Object.keys(elm.attributes || {}).forEach( k => n.setAttribute(k, elm.attributes[k]) );
        (elm.children || []).forEach( c => n.appendChild(render(c)) );
        return n;
    }

    obj(val) {
        const { nodeName, attributes, children } = val;

        return {
            nodeName: nodeName,
            attributes: attributes,
            children: children,
        }
    }
}
