# RE:DOM documentation

<p class="violator solid"><a href="https://redom.js.org/">Website</a></p><p class="violator"><a href="https://github.com/redom/redom">GitHub</a></p>

## Introduction

RE:DOM is a tiny (2 KB) DOM library by [Juha Lindstedt](https://pakastin.fi) and [contributors](https://github.com/redom/redom/graphs/contributors), which adds some useful helpers to create DOM elements and keeping them in sync with the data.

Because RE:DOM is so close to the metal and **doesn't use virtual dom**, it's actually **faster** and uses **less memory** than almost all virtual dom based libraries, including React ([benchmark](http://www.stefankrause.net/js-frameworks-benchmark7/table.html)).

It's also easy to create **reusable components** with RE:DOM.

Another great benefit is, that you can use just **pure JavaScript**, so no complicated templating languages to learn and hassle with.

### Browser support

Only if you use `el.extend()`, `svg.extend()` or `list.extend()`, you'll need at least IE9. All other features should work even in IE6. So for the most parts basically almost every browser out there is supported.

## Installing

There are many ways to use RE:DOM.

### npm

You can install RE:DOM from npm by calling:

```
npm i redom
```

### UMD

RE:DOM supports [UMD](https://github.com/umdjs/umd):

```html
<script src="https://redom.js.org/redom.min.js"></script>
<script>
    const { el, mount } = redom;
    ...
</script>
```

### ES2015

It's also possible to use the new [ES2015 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import):

```js
import { el, mount } from "https://redom.js.org/redom.es.min.js";
```

### Download

Here's the download links:

-   https://redom.js.org/redom.js (UMD, development)
-   https://redom.js.org/redom.min.js (UMD, production)
-   https://redom.js.org/redom.es.js (ES2015, development)
-   https://redom.js.org/redom.es.min.js (ES2015, production)

### Project generator

You can also use the project generator, which will also install a file watcher and bundler. You can find it [here](https://github.com/redom/redom-cli).

### Server-side use

RE:DOM also works on server side, by using [NO:DOM](https://github.com/redom/nodom).

### RE:DOM dev tools for Chrome

You can install [RE:DOM dev tools for Chrome](https://github.com/redom/redom-devtools)

## Elements

`el()` (actually an [alias](#alias) for [`html()`](https://github.com/redom/redom/blob/master/esm/html.js)) is a helper for `document.createElement()` with a couple of differences.

The basic idea is to simply create elements with `el()` and mount them with `mount()`, almost like you would do with plain JavaScript:

```js
import { el, mount } from "redom";

const hello = el("h1", "Hello RE:DOM!");

mount(document.body, hello);
```

```html
<body>
    <h1>Hello RE:DOM!</h1>
</body>
```

### Text reference

String and Number arguments (after the query) generate text nodes. You can also use the [`text()`](https://github.com/redom/redom/blob/master/esm/text.js) helper, which will return a reference to the text node:

```js
import { text, mount } from "redom";

const hello = text("hello");

mount(document.body, hello);

hello.textContent = "hi!";
```

```html
<body>
    hi!
</body>
```

### ID and class names

You can use `#` and `.` as shortcuts for defining element IDs and class names. `div` is the default tag name:

```js
el("");
el("#hello");
el(".hello");
el("span.hello");
```

```html
<div></div>
<div id="hello"></div>
<div class="hello"></div>
<span class="hello"></span>
```

### Style

You can define styles with strings or objects:

```js
el("div", { style: "color: red;" });
el("div", { style: { color: "red" } });
```

```html
<div style="color: red;"></div>
<div style="color: red;"></div>
```

### Attributes and properties

Properties and attributes are auto-detected:

```js
el("input", { type: "email", autofocus: true, value: "foo" });
```

```html
<input type="email" autofocus /> // $0.value === 'foo'
```

### Children

You can also define children while creating elements:

```js
el("a", el("b", el("c")));
```

```html
<a>
    <b>
        <c></c>
    </b>
</a>
```

### Array of children

Passing an array of children also works:

```js
el("a", [el("b"), el("c")]);
```

```html
<a>
    <b></b>
    <c></c>
</a>
```

### Conditional children

It's possible to add children conditionally, by using boolean:

```js
el("form", el("input", { type: "email" }), !forgot && el("input", { type: "password" }));
```

### Middleware

You can add middleware by defining a function:

```js
el("h1", middleware, "Hello RE:DOM!");

function middleware(el) {
    el.className = "hello";
}
```

```html
<h1 class="hello">Hello RE:DOM!</h1>
```

### Component support

You can read more about components [here](#components), but here's how you attach them:

```js
class B {
    constructor() {
        this.el = el("b");
    }
}

el("a", new B());
```

```html
<a>
    <b></b>
</a>
```

### Alias

You can use `el()` or `html()`:

```js
import { el, html } from "redom";

el("div");
html("div");
```

```html
<div></div>
<div></div>
```

### SVG

`el()` and `html()` only create HTML elements. If you want to create a SVG element, you must use [`svg(query)`](https://github.com/redom/redom/blob/master/esm/svg.js):

```js
import { svg, mount } from "redom";

const drawing = svg(
    "svg",
    svg("symbol", { id: "box", viewBox: "0 0 100 100" }, svg("rect", { x: 25, y: 25, width: 50, height: 50 })),
    svg("circle", { r: 50, cx: 25, cy: 25 }),
    svg("use", { xlink: { href: "#box" } })
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

## Update elements

### setAttr

[`setAttr(el, attrs)`](https://github.com/redom/redom/blob/master/esm/setattr.js) is a helper for updating attributes and properties. It will auto-detect attributes and properties:

```js
import { el, setAttr } from "redom";

const hello = el("h1", "Hello RE:DOM!");

setAttr(hello, {
    style: { color: "red" },
    className: "hello", // You could also just use 'class'
});
```

### setStyle

[`setStyle(el, styles)`](https://github.com/redom/redom/blob/master/esm/setstyle.js) is a shortcut for updating the `style` attribute:

```js
import { setStyle } from "redom";

setStyle(hello, { color: "green" });
```

## Components

It's really easy to create components with RE:DOM.
Simply define a class or function, which returns an object with at least an `el` property, and in case of [list](#lists) also the `update` property:

```js
import { el, mount } from "redom";

class Hello {
    constructor() {
        this.el = el("h1");
    }
    update(data) {
        this.el.textContent = "Hello " + data + "!";
    }
}

const hello = new Hello();

hello.update("RE:DOM!");

mount(document.body, hello);
```

### Diffing

You don't have to manually diff class names / properties / attributes **except when dealing with URLs**.
If you change the `src` of `img`, `iframe` or `video` elements, the browser will **reload** the asset/website even if the value did not actually change.
One way to work around this would be:

```js
import { el, mount } from "redom";

class Image {
    constructor() {
        this.el = el("img");
        this.data = {};
    }
    update(data) {
        const { url } = data;

        if (url !== this.data.url) {
            this.el.src = url;
        }

        this.data = data;
    }
}
```
