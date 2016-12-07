# fpl-api-node
A simple node wrapper for the fantasy.premierleague.com restful web api

## Usage
```js
const fplapi = require('fpl-api-node');

fplapi.getEntry(123456).then((data) => {

    // do something with our data
    console.log(data);

}).catch((err) => {
    // something went wrong
});
```

## API

* [fplApiNode](#module_fplApiNode)
    * [.getAllStaticData()](#module_fplApiNode.getAllStaticData) ⇒ <code>Promise</code>
    * [.getTeams()](#module_fplApiNode.getTeams) ⇒ <code>Promise</code>
    * [.getElements()](#module_fplApiNode.getElements) ⇒ <code>Promise</code>
    * [.getEvent(eventNumber)](#module_fplApiNode.getEvent) ⇒ <code>Promise</code>
    * [.getEntry(id)](#module_fplApiNode.getEntry) ⇒ <code>Promise</code>
    * [.getEntryHistory(id)](#module_fplApiNode.getEntryHistory) ⇒ <code>Promise</code>
    * [.getEntryEvent(id, eventNumber)](#module_fplApiNode.getEntryEvent) ⇒ <code>Promise</code>
    * [.getEntryTransfers(id)](#module_fplApiNode.getEntryTransfers) ⇒ <code>Promise</code>
    * [.getClassicLeagueStandings(id)](#module_fplApiNode.getClassicLeagueStandings) ⇒ <code>Promise</code>

<a name="module_fplApiNode.getAllStaticData"></a>

### fplApiNode.getAllStaticData() ⇒ <code>Promise</code>
All static game data.
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/bootstrap-static

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>
<a name="module_fplApiNode.getTeams"></a>

### fplApiNode.getTeams() ⇒ <code>Promise</code>
Teams (Premier Leaugue clubs)
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/teams

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>
<a name="module_fplApiNode.getElements"></a>

### fplApiNode.getElements() ⇒ <code>Promise</code>
Elements (players)
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/elements

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>
<a name="module_fplApiNode.getEvent"></a>

### fplApiNode.getEvent(eventNumber) ⇒ <code>Promise</code>
Event /gameweek details
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/event/${eventNumber}/live

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| eventNumber | The event / gameweek number |

<a name="module_fplApiNode.getEntry"></a>

### fplApiNode.getEntry(id) ⇒ <code>Promise</code>
Entry (FPL team)
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/entry/${id}

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| id | Entry id |

<a name="module_fplApiNode.getEntryHistory"></a>

### fplApiNode.getEntryHistory(id) ⇒ <code>Promise</code>
Entry history. An expanded entry view with additional objects.
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/entry/${id}/history

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| id | Entry id |

<a name="module_fplApiNode.getEntryEvent"></a>

### fplApiNode.getEntryEvent(id, eventNumber) ⇒ <code>Promise</code>
Entry event. Details of a particular event (or gameweek)
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| id | Entry id |
| eventNumber | The event / gameweek number |

<a name="module_fplApiNode.getEntryTransfers"></a>

### fplApiNode.getEntryTransfers(id) ⇒ <code>Promise</code>
Entry transfers.
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/entry/${id}/transfers

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| id | Entry id |

<a name="module_fplApiNode.getClassicLeagueStandings"></a>

### fplApiNode.getClassicLeagueStandings(id) ⇒ <code>Promise</code>
Classic league standings
A promise that if fullfilled returns a json object mapped to:
https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}

**Kind**: static method of <code>[fplApiNode](#module_fplApiNode)</code>

| Param | Description |
| --- | --- |
| id | League id |

