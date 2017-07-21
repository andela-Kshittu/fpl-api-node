import * as async from 'async';
import * as _ from 'lodash';
import { fromCache } from './api-service';
import {PlayerStats} from './api-service/types';
import * as dataService from './data-service';

export function findAll() {
  return fromCache(`players`, () => {
    return new Promise((resolve: any, reject: any) => {
      dataService.getElements().then((elements) => {
        const players = elements.map((element) => {
          return toPlayer(element);
        });
        resolve(players);
      });
    });
  });
}

export function find(playerId: number) {
  return fromCache(`player-${playerId}`, () => {
    return new Promise((resolve: any, reject: any) => {
      dataService.getElementById(playerId).then((element) => {
        const player = toPlayer(element);
        resolve(player);
      });
    });
  });
}

export function getStatsForGameweek(playerId: number, gameweekNumber: number): Promise<PlayerStats> {
  return fromCache(`player-${playerId}-gw-${gameweekNumber}`, () => {
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
  });
}

/**
 *
 * @param element
 * @private
 */
function toPlayer(element) {
  return {
    webName: element.web_name,
  };
}
