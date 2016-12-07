/**
 * A simple node wrapper for the fantasy.premierleague restful web apis
 */

'use strict';

const fetch = require('node-fetch');

/**
 *  @module fplApiNode
 */

/**
 * Returns a promise that if fullfilled returns json object mapped to the givin fantasy.premierleague request
 * @param path The path of the rest web api request
 * @returns {Promise}
 * @private
 */
function fetchData(path) {

  return new Promise((resolve, reject) => {

    fetch(`https://fantasy.premierleague.com/drf/${path}`).then((res) => {
      return res.json();
    }).then((json) => {
      resolve(json);
    }).catch((err) => {
      reject(err);
    });

  });

}

module.exports = {

  /**
   * All static game data.
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/bootstrap-static
   * @returns {Promise}
   */
  getAllStaticData: function () {
    return fetchData('/bootstrap-static');
  },

  /**
   * Teams (Premier Leaugue clubs)
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/teams
   * @returns {Promise}
   */
  getTeams: function () {
    return fetchData('/teams');
  },

  /**
   * Elements (players)
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/elements
   * @returns {Promise}
   */
  getElements: function () {
    return fetchData('/elements');
  },

  /**
   * Event /gameweek details
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/event/${eventNumber}/live
   * @param eventNumber The event / gameweek number
   * @returns {Promise}
   */
  getEvent: function (eventNumber) {
    return fetchData(`/event/${eventNumber}/live`);
  },

  /**
   * Entry (FPL team)
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/entry/${id}
   * @param id Entry id
   * @returns {Promise}
   */
  getEntry: function (id) {
    return fetchData(`/entry/${id}`);
  },

  /**
   * Entry history. An expanded entry view with additional objects.
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/entry/${id}/history
   * @param id Entry id
   * @returns {Promise}
   */
  getEntryHistory: function (id) {
    return fetchData(`/entry/${id}/history`);
  },

  /**
   * Entry event. Details of a particular event (or gameweek)
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}
   * @param id Entry id
   * @param eventNumber The event / gameweek number
   * @returns {Promise}
   */
  getEntryEvent: function (id, eventNumber) {
    return fetchData(`/entry/${id}/event/${eventNumber}`);
  },

  /**
   * Entry transfers.
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/entry/${id}/transfers
   * @param id Entry id
   * @returns {Promise}
   */
  getEntryTransfers: function (id) {
    return fetchData(`/entry/${id}/transfers`);
  },

  /**
   * Classic league standings
   * A promise that if fullfilled returns a json object mapped to:
   * https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}
   * @param id League id
   * @returns {Promise}
   */
  getClassicLeagueStandings: function (id) {
    return fetchData(`/leagues-classic-standings/${id}`);
  }

};
