# replace-array

> Utility to replace items in arrays at specified index

[![NPM](https://img.shields.io/npm/v/replace-array.svg)](https://www.npmjs.com/package/replace-array)

## Install

```bash
yarn add replace-array
```

## Usage

### replaceAtIndex

```js
import { replaceAtIndex } from 'replace-array';

const replaced = replaceAtIndex([1, 2, 3], 1, 5); // -> [1, 5, 3]

const replacedFn = replaceAtIndex([1, 2, 3], 1, value => value * 3); // -> [1, 6, 3]
```

### removeAtIndex

```js
import { removeAtIndex } from 'replace-array';

const removed = removeAtIndex([1, 2, 3], 1); // -> [1, 3]
```

## License

MIT © [felamaslen](https://github.com/felamaslen)
