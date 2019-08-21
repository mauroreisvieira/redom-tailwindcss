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
import { el, mount } from 'https://redom.js.org/redom.es.min.js';
```

### Download
Here's the download links:
- [UMD, development](https://redom.js.org/redom.js)
- [UMD, production](https://redom.js.org/redom.min.js)
- [ES2015, development](https://redom.js.org/redom.es.js)
- [ES2015, production](https://redom.js.org/redom.es.min.js)
