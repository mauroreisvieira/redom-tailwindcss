import { mount, el } from 'redom';

export const Styles = (styles) => {
    const style = el('style', {}, styles);
    mount(document.head, style);
}
