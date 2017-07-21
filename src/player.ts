import * as async from 'async';
import * as _ from 'lodash';
import * as NodeCache from 'node-cache';
import { fromCache } from './api-service/api.cache';
import { TeamPick, TeamStatistics, TeamSummary } from './api-service/api.interfaces';
import * as dataService from './data-service';
import * as dataTypes from './data-service/types';

/**
 * Returns team summary
 */
export function find(id: number): Promise<TeamSummary> {
  return fromCache(`player-${id}`, () => {
    return new Promise((resolve: any, reject: any) => {
      dataService.getEntry(id).then((data) => {
        const summary = setSummary(data.entry);
        resolve(summary);
      });
    });
  });
}

function setSummary(entry: dataTypes.EntryDetails) {
  return {
    gameweekPoints: entry.summary_event_points,
    gameweekRank: entry.summary_event_rank,
    gameweekTransfers: entry.event_transfers,
    gameweekTransfersCost: entry.event_transfers_cost,
    id: entry.id,
    managerFirstName: entry.player_first_name,
    managerLastName: entry.player_last_name,
    moneyInBank: entry.bank,
    name: entry.name,
    overallPoints: entry.summary_overall_points,
    overallRank: entry.summary_overall_rank,
    regionIso: entry.player_region_short_iso,
    regionName: entry.player_region_name,
    teamValue: entry.value,
    totalTransfers: entry.total_transfers,
  };
}
