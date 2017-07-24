# fpl-api-node (Season 2017-18)

[![npm](https://img.shields.io/npm/v/fpl-api-node.svg)](https://www.npmjs.com/package/fpl-api-node)
[![npm](https://img.shields.io/apm/l/vim-mode.svg)]()

**Please note this library is currently being updated for the 2017-2018 season.**

A node API wrapper for the Fantasy Premier League (fantasy.premierleague.com) web apis. 


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

## Examples

### Team Data


```js
const team = new fplApi.Team(123);

team.getStatistics().then((data) => {
  console.log(data.totalGoals);
});

```

## API

Documentation is being updated for 2017-2018 season.
