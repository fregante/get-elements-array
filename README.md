# get-elements-array

> Array of elements from selector, Array-like objects and single elements.

[![gzipped size][badge-gzip]](#no-link)
[![Travis build status][badge-travis]][link-travis]
[![npm version][badge-version]][link-npm]

  [badge-gzip]: https://badges.herokuapp.com/size/github/bfred-it/get-elements-array/master/dist/get-elements-array.browser.js?gzip=true&label=gzipped%20size
  [badge-travis]: https://api.travis-ci.org/bfred-it/get-elements-array.svg
  [badge-version]: https://img.shields.io/npm/v/get-elements-array.svg
  [link-travis]: https://travis-ci.org/bfred-it/get-elements-array
  [link-npm]: https://www.npmjs.com/package/get-elements-array

The purpose of this module is to simplify the interpretation of an "elements" parameter in your own functions/modules, kinda like jQuery does.

## Usage

`getElements()` **always returns a plain Array** of elements with many types of input:

```js
// a selector string:
elementsArray = getElements('.article img');
// => [<img>, <img>, <img>]
```

```js
// a single DOM element:
elementsArray = getElements(document.body);
// => [document.body]
```

```js
// a collection of elements:
elementsArray = getElements(document.body.children);
// => [<h1>, <p>, ...]
```

```js
// an array of elements:
elementsArray = getElements([document.body, document.head]);
// => [document.body, document.head]
```

```js
// an empty collection or null parameter:
elementsArray = getElements(undefined);
// => []
```

```js
// `document` or `window:
elementsArray = getElements(document);
// => [document]
```

**Note:** it does not verify that the resulting array contains **only** elements. If needed, you can use a filter on the _now-easy-to-use_ array:

```js
const getElements = require('get-elements-array');
const isElement = require('lodash.iselement');

const elements = getElements([1, document.body]).filter(isElement);
// => [document.body]
```

## Install

Pick your favorite:

```html
<script src="dist/get-elements-array.browser.js"></script>
```

```sh
npm install --save get-elements-array
```

```js
var getElements = require('get-elements-array');
```

```js
import getElements from 'get-elements-array';
```

## Dependencies

None!

## Related

* [on-off](https://github.com/bfred-it/on-off/): Add and remove multiple events on multiple elements in <1KB

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
