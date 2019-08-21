## Mounting

Please use `mount()/unmount()/setChildren()` every time you need to `mount/unmount` elements inside a RE:DOM app.

These functions will trigger lifecycle events, add references to components etc.

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
