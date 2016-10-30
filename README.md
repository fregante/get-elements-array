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

Similar to how jQuery works and perfect to parse the "elements" parameter of your module.

## Usage

`getElements()` accepts:

- a selector string like `getElements('.article img')`
- a single DOM element, like `getElements(document.body)`
- a collection of elements, like `getElements(document.body.children)`
- an array of elements, like `getElements([document.body, document.head])`
- an empty collection or null parameter, like `getElements(undefined)`
- `document` or `window`, like `getElements(document)`

`getElements()` always returns a plain Array of elements, empty if no elements are found.

**Note:** it does not actually verify that the resulting array contains only elements. The purpose of this module is to simplify the interpretation of an "elements" parameter and, if needed, you can use a `isElement` filter on the now-easy-to-use-array:

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
