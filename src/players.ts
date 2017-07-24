import * as async from 'async';
import * as _ from 'lodash';
import * as NodeCache from 'node-cache';
import { fromCache } from './api-service/api.cache';
import { PlayerStats, TeamPick, TeamStatistics, TeamSummary } from './api-service/api.interfaces';
import * as dataService from './data-service';
import * as dataTypes from './data-service/types';

/**
 * Returns team summary
 */
export function find(playerId: number) {
  return fromCache(`player-${playerId}`, () => {
    return new Promise((resolve: any, reject: any) => {
      dataService.getElementById(playerId).then((element) => {
        resolve(setSummary(element));
      });
    });
  });
}

export function findAll() {
  return fromCache(`players`, () => {
    return new Promise((resolve: any, reject: any) => {
      const players: any = [];
      dataService.getElements().then((elements) => {
        elements.forEach((element) => {
          players.push(setSummary(element));
        });
        resolve(players);
      });
    });
  });
}

export function getDataForGameWeek(playerId: number, gameweekNumber: number): Promise<PlayerStats> {
  return new Promise((resolve: any, reject: any) => {
    dataService.getEvent(gameweekNumber).then((event) => {
      const element = event.elements[playerId];
      if (element) {
        resolve(element.stats);
      } else {
        resolve({});
      }
    });
  });
}

/**
 *
 * @param element
 * @private
 */
function setSummary(element: any) {
  return {
    firstName: element.first_name,
    secondName: element.second_name,
    webName: element.web_name,
  };
}
