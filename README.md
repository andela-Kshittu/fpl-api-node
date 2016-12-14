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

Typescript:
```js
import * as fplapi from 'fpl-api-node';
```

Javascript:

```js
const fplapi = require('fpl-api-node');
```

### Example

```js
fplapi.getEntry(123456).then((entry) => {

    // do something with our data
    console.log(entry);

}).catch((err) => {
    // something went wrong
});
```

## API

### Typescript

Typescript docs can be found at. 

### Javascript API

<a name="module_fplApiNode"></a>

## fplApiNode

* [fplApiNode](#module_fplApiNode)
    * [~getEntry(entryId)](#module_fplApiNode..getEntry) ⇒ <code>Promise</code>
    * [~getEntryEvent(entryId, eventNumber)](#module_fplApiNode..getEntryEvent) ⇒ <code>Promise</code>
    * [~getEntryTransfers(entryId)](#module_fplApiNode..getEntryTransfers) ⇒ <code>Promise</code>
    * [~getAllStaticData()](#module_fplApiNode..getAllStaticData) ⇒ <code>Promise</code>
    * [~getTeams()](#module_fplApiNode..getTeams) ⇒ <code>Promise</code>
    * [~getElements()](#module_fplApiNode..getElements) ⇒ <code>Promise</code>
    * [~getElementTypes()](#module_fplApiNode..getElementTypes) ⇒ <code>Promise</code>
    * [~getGameSettings()](#module_fplApiNode..getGameSettings) ⇒ <code>Promise</code>
    * [~getEvent()](#module_fplApiNode..getEvent) ⇒ <code>Promise</code>
    * [~getClassicLeagueStandings(leagueId)](#module_fplApiNode..getClassicLeagueStandings) ⇒ <code>Promise</code>

<a name="module_fplApiNode..getEntry"></a>

### fplApiNode~getEntry(entryId) ⇒ <code>Promise</code>
Entry (Fpl manager team)

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/entry/${id}/history

| Param | Description |
| --- | --- |
| entryId | Entry id |

<a name="module_fplApiNode..getEntryEvent"></a>

### fplApiNode~getEntryEvent(entryId, eventNumber) ⇒ <code>Promise</code>
Entry event. Details of a particular event (or gameweek)

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}

| Param | Description |
| --- | --- |
| entryId | Entry id |
| eventNumber | The event / gameweek number |

<a name="module_fplApiNode..getEntryTransfers"></a>

### fplApiNode~getEntryTransfers(entryId) ⇒ <code>Promise</code>
Entry transfers

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/entry/${id}/transfers

| Param | Description |
| --- | --- |
| entryId | Entry id |

<a name="module_fplApiNode..getAllStaticData"></a>

### fplApiNode~getAllStaticData() ⇒ <code>Promise</code>
All static game data

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/bootstrap-static
<a name="module_fplApiNode..getTeams"></a>

### fplApiNode~getTeams() ⇒ <code>Promise</code>
Teams (Premier Leaugue clubs)

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/teams
<a name="module_fplApiNode..getElements"></a>

### fplApiNode~getElements() ⇒ <code>Promise</code>
Elements (players)

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/elements
<a name="module_fplApiNode..getElementTypes"></a>

### fplApiNode~getElementTypes() ⇒ <code>Promise</code>
Element types

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/elements-types
<a name="module_fplApiNode..getGameSettings"></a>

### fplApiNode~getGameSettings() ⇒ <code>Promise</code>
Game settings

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/game-settings
<a name="module_fplApiNode..getEvent"></a>

### fplApiNode~getEvent() ⇒ <code>Promise</code>
Event /gameweek details

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>
**Returns**: <code>Promise</code> - If fulfilled returns an object mapped to https://fantasy.premierleague.com/drf/event/${eventNumber}/live
<a name="module_fplApiNode..getClassicLeagueStandings"></a>

### fplApiNode~getClassicLeagueStandings(leagueId) ⇒ <code>Promise</code>
Classic league standings
https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}

**Kind**: inner method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| leagueId | League id |