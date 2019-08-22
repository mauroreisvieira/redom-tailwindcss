# Installing

There are many ways to use **RE:DOM**.

## Via npm

You can install RE:DOM from npm by calling:

```shell
# Using npm
npm install redom

# Using Yarn
yarn add redom
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

-   [UMD, development](https://redom.js.org/redom.js)
-   [UMD, production](https://redom.js.org/redom.min.js)
-   [ES2015, development](https://redom.js.org/redom.es.js)
-   [ES2015, production](https://redom.js.org/redom.es.min.js)

### Project generator

You can also use the project generator, which will also install a file watcher and bundler. You can find it [here](https://github.com/redom/redom-cli).

### Server-side use

RE:DOM also works on server side, by using [NO:DOM](https://github.com/redom/nodom).

### RE:DOM dev tools for Chrome

You can install [RE:DOM dev tools for Chrome](https://github.com/redom/redom-devtools)
