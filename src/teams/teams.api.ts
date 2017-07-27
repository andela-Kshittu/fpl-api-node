
import * as NodeCache from 'node-cache';
import { fromCache } from '../api-service';
import {TeamPick, TeamStatistics, TeamSummary} from '../api-service/types';
import {toPicks, toStats, toTeam} from './teams.mapper';

import * as dataService from '../data-service';

import * as dataTypes from '../data-service/types';

export function find(id: number): Promise<TeamSummary> {
  return fromCache(`team-${id}`, () => {
    return new Promise((resolve: any, reject: any) => {
      dataService.getEntry(id).then((data) => {
        const team = toTeam(data);
        resolve(team);
      });
    });
  });
}

/**
 * Returns team picks
 */
export function getPicks(teamId: number): Promise<TeamPick[]> {
  return fromCache(`team-picks-${teamId}`, () => {
    return new Promise((resolve: any, reject: any) => {
      dataService.getEntry(teamId).then((data) => {
        toPicks(data).then((picks) => {
          resolve(picks);
        });
      });
    });
  });
}

/**
 * Returns team summary
 */
export function getStats(teamId: number): Promise<TeamStatistics> {
  return fromCache(`team-stats-${teamId}`, () => {
    return new Promise((resolve: any, reject: any) => {
      Promise.all([dataService.getEntry(teamId), getPicks(teamId)]).then((data) => {
        const stats = toStats(data[0], data[1]);
        resolve(stats);
      });
    });
  });
}
