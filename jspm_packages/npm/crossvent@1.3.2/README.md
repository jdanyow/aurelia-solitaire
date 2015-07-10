# crossvent

> Cross-platform browser event handling

The event handler API used by [dominus][1].

# Install

Using Bower

```shell
bower install -S crossvent
```

Using `npm`

```shell
npm install -S crossvent
```

# API

The API exposes a few methods that let you deal with event handling in a consistent manner across browsers.

### `crossvent.add(el, type, fn, capturing?)`

Adds an event listener `fn` of type `type` to DOM element `el`.

```js
crossvent.add(document.body, 'click', function (e) {
  console.log('clicked document body');
});
```

### `crossvent.remove(el, type, fn, capturing?)`

Removes an event listener `fn` of type `type` from DOM element `el`.

```js
crossvent.add(document.body, 'click', clicked);
crossvent.remove(document.body, 'click', clicked);

function clicked (e) {
  console.log('clicked document body');
}
```

### `crossvent.fabricate(el, type)`

Creates a synthetic event of type `type` and dispatches it on `el`.

```js
crossvent.add(document.body, 'sugar', sugary);
crossvent.fabricate(document.body, 'sugar');

function sugary (e) {
  console.log('synthetic sugar event raised');
}
```

# License

MIT

[1]: https://github.com/bevacqua/dominus
