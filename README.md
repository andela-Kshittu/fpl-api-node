# fpl-api-node

[![npm](https://img.shields.io/npm/v/fpl-api-node.svg)](https://www.npmjs.com/package/fpl-api-node)
[![npm](https://img.shields.io/apm/l/vim-mode.svg)]()

A simple node wrapper for the Fantasy Premier League (fantasy.premierleague.com) restful web api.

## Installation
```js
npm install fpl-api-node --save
```

## Usage
The package is written in typescript and can be consumed either strongly-typed or in plain Javascript.

### Javascript

```js
const fplapi = require('fpl-api-node');
```

### Typescript / ES2105

```js
import * as fplapi from 'fpl-api-node');
```

### Example

```js
fplapi.getEntry(123456).then((data) => {

    // do something with our data
    console.log(data);

}).catch((err) => {
    // something went wrong
});
```

## API

API docs can be found at <a href="https://tgreyuk.github.io/fpl-api-node">https://tgreyuk.github.io/fpl-api-node</a>
