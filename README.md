# add-line-numbers

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Adds line numbers to a source string, padding left and starting at the given offset.

## Example

`example.js`:

```js
var addLineNumbers = require('add-line-numbers')
var stdin = require('get-stdin')

stdin(function (body) {
  var src = addLineNumbers(body.toString())
  process.stdout.write(src + '\n')
})
```

`test.js`:

```js
var util = require('util')
console.log(util.isNumber(2))
console.log("foo!")
```

Now run the following in bash:

```sh
node example.js < test.js
```

Resulting output:

```js
1: var util = require('util')
2: console.log(util.isNumber(2))
3: console.log("foo!")
```

## Usage

[![NPM](https://nodei.co/npm/add-line-numbers.png)](https://www.npmjs.com/package/add-line-numbers)

#### `str = addLineNumbers(str, start, delimiter)`

Adds a number to the start of each line in the `str` text. 

- `start` (Number) number to start counting at, defaults to 1
- `delimiter` (String) joins the number and line, defaults to `": "`

Returns the transformed string.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/add-line-numbers/blob/master/LICENSE.md) for details.
