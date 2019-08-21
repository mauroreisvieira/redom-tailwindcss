## Introduction
RE:DOM is a tiny (2 KB) DOM library by [Juha Lindstedt](https://pakastin.fi) and [contributors](https://github.com/redom/redom/graphs/contributors), which adds some useful helpers to create DOM elements and keeping them in sync with the data.

Because RE:DOM is so close to the metal and __doesn't use virtual dom__, it's actually __faster__ and uses __less memory__ than almost all virtual dom based libraries, including React ([benchmark](http://www.stefankrause.net/js-frameworks-benchmark7/table.html)).

It's also easy to create __reusable components__ with RE:DOM.

Another great benefit is, that you can use just __pure JavaScript__, so no complicated templating languages to learn and hassle with.

### Browser support
Only if you use `el.extend()`, `svg.extend()` or `list.extend()`, you'll need at least IE9. All other features should work even in IE6. So for the most parts basically almost every browser out there is supported.

