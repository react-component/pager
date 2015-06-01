# rc-pager

react pager component

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-pager.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-pager
[travis-image]: https://img.shields.io/travis/react-component/pager.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/pager
[coveralls-image]: https://img.shields.io/coveralls/react-component/pager.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/pager?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/pager.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/pager
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-pager.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-pager

## install

[![rc-pager](https://nodei.co/npm/rc-pager.png)](https://npmjs.org/package/rc-pager)

## Usage

```js
var Pager = require('rc-pager');
React.renderComponent(
  <Pager total={10} current={5}/>,
  document.getElementById('p1')
);
```

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/

online example:

http://react-component.github.io/pager/build/examples/index.html

## API

#### total `Number`
  
  * total page

#### current `Number`

  * current page

#### previousLabel `String|Element`

* previous page label, also can be a React Component

#### nextLabel `String|Element`

* next page label, also can be a React Component

#### onSkipTo(page) `Function`
  
  * The callback when the page skip

## Test Case

http://localhost:8000/tests/runner.html?coverage

## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage

## License

rc-pager is released under the MIT license.
