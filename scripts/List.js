import { list } from 'https://redom.js.org/redom.es.min.js';
import { Item } from './Item.js';

export class List {
    constructor () {
        this.el = list('ul', Item, 'id');
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(items => {
            this.el.update(items.map( item => {
                return {
                    id: item.id,
                    title: item.name
                }
            }))
        });
    }
}
