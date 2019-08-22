# Elements

`el()` (actually an [alias](#alias) for [`html()`](https://github.com/redom/redom/blob/master/esm/html.js)) is a helper for `document.createElement()` with a couple of differences.

The basic idea is to simply create elements with `el()` and mount them with `mount()`, almost like you would do with plain JavaScript:

```js
import { el, mount } from 'redom';

const hello = el('h1', 'Hello RE:DOM!');

mount(document.body, hello);
```

```html
<body>
  <h1>Hello RE:DOM!</h1>
</body>
```

## Text reference

String and Number arguments (after the query) generate text nodes. You can also use the [`text()`](https://github.com/redom/redom/blob/master/esm/text.js) helper, which will return a reference to the text node:

```js
import { text, mount } from 'redom';

const hello = text('hello');

mount(document.body, hello);

hello.textContent = 'hi!';
```

```html

<body>hi!</body>

```

## ID and class names

You can use `#` and `.` as shortcuts for defining element IDs and class names. `div` is the default tag name:

```js
el('')
el('#hello')
el('.hello')
el('span.hello')
```

```html
<div></div>
<div id="hello"></div>
<div class="hello"></div>
<span class="hello"></span>
```

## Style
You can define styles with strings or objects:

```js
el('div', { style: 'color: red;' })
el('div', { style: { color: 'red' } })
```

```html
<div style="color: red;"></div>
<div style="color: red;"></div>
 ```

## Attributes and properties
Properties and attributes are auto-detected:

```js
el('input', { type: 'email', autofocus: true, value: 'foo' })
```

```html
<input type="email" autofocus> // $0.value === 'foo'
```

## Children
You can also define children while creating elements:

```js
el('a',
  el('b',
    el('c')
  )
)
```
```html
<a>
  <b>
    <c></c>
  </b>
</a>
```

## Array of children
Passing an array of children also works:

```js
el('a', [
  el('b'),
  el('c')
]);
```
```html
<a>
  <b></b>
  <c></c>
</a>
```

## Conditional children
It's possible to add children conditionally, by using boolean:

```js
el('form',
  el('input', { type: 'email' }),
  !forgot && el('input', { type: 'password' })
);
```

## Middleware
You can add middleware by defining a function:

```js
el('h1', middleware, 'Hello RE:DOM!');

function middleware (el) {
  el.className = 'hello';
}

```
```html
<h1 class="hello">Hello RE:DOM!</h1>
```

## Component support
You can read more about components [here](#components), but here's how you attach them:

```js
class B {
  constructor () {
    this.el = el('b');
  }
}

el('a',
  new B()
)
```
```html
<a>
  <b></b>
</a>
```

## Alias
You can use `el()` or `html()`:

```js
import { el, html } from 'redom';

el('div')
html('div')
```
```html
<div></div>
<div></div>
```

## SVG
`el()` and `html()` only create HTML elements. If you want to create a SVG element, you must use [`svg(query)`](https://github.com/redom/redom/blob/master/esm/svg.js):

```js
import { svg, mount } from 'redom';

const drawing = svg('svg',
  svg('symbol', { id: 'box', viewBox: '0 0 100 100' },
    svg('rect', { x: 25, y: 25, width: 50, height: 50 })
  ),
  svg('circle', { r: 50, cx: 25, cy: 25 }),
  svg('use', { xlink: { href: '#box' } })
);

mount(document.body, drawing);
```

```html
<body>
  <svg>
    <symbol id="box" viewBox="0 0 100 100">
      <rect x="25" y="25" width="50" height="50"></rect>
    </symbol>
    <circle r="50" cx="25" cy="25"></circle>
    <use xlink:href="#box"></use>
  </svg>
</body>
```
