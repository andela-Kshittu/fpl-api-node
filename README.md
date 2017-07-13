# fpl-api-node (Season 2017-18)

[![npm](https://img.shields.io/npm/v/fpl-api-node.svg)](https://www.npmjs.com/package/fpl-api-node)
[![npm](https://img.shields.io/apm/l/vim-mode.svg)]()

A strongly typed node wrapper for the Fantasy Premier League (fantasy.premierleague.com) restful web api. 
It's job is a simple one - to fetch and return data that maps to the available end-points. 

*To avoid topics such as Cross-Origin and Content Security Policy this wrapper should be consumed in a node server-side context.*


## Getting Started

```js
npm install fpl-api-node --save
```

### Typescript
```js
import * as fplapi from 'fpl-api-node';
```

### Javascript

```js
const fplapi = require('fpl-api-node');
```


## Example

```js
fplapi.getEntry(123456).then((data) => {

  // do something with our data
  console.log(data);

}).catch((err) => {
  // something went wrong
});
```

[Read the API documentation](https://github.com/tgreyuk/fpl-api-node/blob/master/docs/API.md) for available methods.

## Usage

You can use the package in a number of ways for example to create a restful api on a web app using expressjs. 

The package uses axios under the hood. If using outside of typescript and don't care about types you may prefer to fetch the endpoints directly rather than use this wrapper.

The Available end-points are:
* https://fantasy.premierleague.com/drf/bootstrap-static
* https://fantasy.premierleague.com/drf/entry/${id}/history
* https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}
* https://fantasy.premierleague.com/drf/entry/${id}/transfers
* https://fantasy.premierleague.com/drf/teams
* https://fantasy.premierleague.com/drf/elements
* https://fantasy.premierleague.com/drf/elements-types
* https://fantasy.premierleague.com/drf/game-settings
* https://fantasy.premierleague.com/drf/event/${eventNumber}/live
* https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}


