# Lifecycle
RE:DOM supports true lifecycle events. Three events are defined: `onmount`, `onremount` and `onunmount`.

* The first time you mount an element to a specific parent, `onmount` will be triggered.
* If you mount an element again to the same parent, `onremount` will be triggered.
* If you unmount an element or move it from one parent to another, `onunmount` will be triggered.

This means that `onunmount` and `onmount` will be triggered in succession when moving an element from one parent to another.

```js
import { el, mount } from 'redom';

class Hello {
  constructor () {
    this.el = el('h1', 'Hello RE:DOM!');
  }
  onmount () {
    console.log('mounted Hello');
  }
  onremount () {
    console.log('remounted Hello');
  }
  onunmount () {
    console.log('unmounted Hello');
  }
}

class App {
  constructor () {
    this.el = el('app',
      this.hello = new Hello()
    );
  }
  onmount () {
    console.log('mounted App');
  }
  onremount () {
    console.log('remounted App');
  }
  onunmount () {
    console.log('unmounted App');
  }
}

const app = new App();

mount(document.body, app);
mount(document.body, app);
mount(document.head, app);
unmount(document.head, app);
```

```
mounted App
mounted Hello
remounted App
remounted Hello
unmounted App
unmounted Hello
mounted App
mounted Hello
unmounted App
unmounted Hello
```
