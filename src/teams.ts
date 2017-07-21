import * as async from 'async';
import * as _ from 'lodash';
import * as NodeCache from 'node-cache';
import { fromCache } from './api-service';
import {TeamPick,TeamStatistics,TeamSummary} from './api-service/types';
import * as dataService from './data-service';
import * as dataTypes from './data-service/types';
export function find(id: number) {
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

/**
 *
 * @param data
 * @private
 */
function toTeam(data) {
  const entry = data.entry;
  return {
    gameweekPoints: entry.summary_event_points,
    gameweekRank: entry.summary_event_rank,
    gameweekTransfers: entry.event_transfers,
    gameweekTransfersCost: entry.event_transfers_cost,
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
/**
 *
 * @param entry
 * @private
 */
function toPicks(entry: dataTypes.Entry): Promise<TeamPick[]> {

  return new Promise((resolve, reject) => {

    dataService.getElements().then((elements) => {

      const picks = [] as any;

      if (entry.history.length === 0) {
        resolve([]);
      } else {

        async.each(entry.history, (event, callback) => {

          dataService.getEntryEvent(entry.entry.id, event.event).then((result) => {
            picks.push(result.picks);
            callback();
          });

        }, (err) => {

          if (err) {
            reject(err);
          } else {

            const groupedPlayers = _.groupBy(_.flatten(picks), 'element');

            const players = _.toArray(_.mapValues(groupedPlayers, (value, playerKey) => {

              const player = _.reduce(value, (result, pick: dataTypes.EntryPick) => {

                const type = pick.element_type;

                if (pick.is_captain) {
                  result.timesCaptained = result.timesCaptained + 1;
                  result.captainPoints = result.captainPoints + pick.points;
                }

                if (!pick.is_sub && pick.stats.minutes > 0) {
                  result.timesPlayed = result.timesPlayed + 1;
                  result.points = result.points + pick.points;

                  Object.keys(pick.stats).forEach((statKey) => {
                    const key = _.camelCase(statKey);
                    result[key] = !result[key] ? +pick.stats[statKey] : result[key] + pick.stats[statKey];

                  });
                } else {
                  result.timesBenched = result.timesBenched + 1;
                }
                return result;
              }, {
                  captainPoints: 0,
                  points: 0,
                  timesBenched: 0,
                  timesCaptained: 0,
                  timesPlayed: 0,
                });

              const element = _.find(elements, { id: parseInt(playerKey, 10) });

              let elementDetails = {};

              if (element) {
                elementDetails = {
                  id: element.id,
                  webName: element.web_name,
                };
              }

              return { ...player, ...elementDetails };

            }));
            resolve(players as TeamPick[]);
          }
        });
      }
    });

  });

}

/**
 *
 * @param teamData
 * @param picks
 * @private
 */
function toStats(teamData, picks): Promise<TeamStatistics> {

  return new Promise((resolve, reject) => {

    dataService.getTotalPlayers().then((totalPlayers) => {

      // ranks
      const overallRank = teamData.entry.summary_overall_rank;
      let highestGameWeekRank = totalPlayers;
      let lowestGameweekRank = 0;
      const rankPercentile = (100 - (((overallRank - 1) / totalPlayers) * 100)).toFixed(2);

      // scores
      const overallPoints = teamData.entry.summary_overall_points;
      let highestGameweekScore = 0;
      let lowestGameweekScore = 200;
      let averageScore = 0;

      // transfers
      const totalTransfers = teamData.entry.total_transfers;
      let transferCost = 0;
      const totalValue = (teamData.entry.value + teamData.entry.bank) / 10;

      teamData.history.forEach((event) => {

        // ranks
        const rank = event.rank;
        if (rank && rank > lowestGameweekRank) {
          lowestGameweekRank = rank;
        }
        if (rank && rank < highestGameWeekRank) {
          highestGameWeekRank = rank;
        }

        // scores
        const score = event.points - event.event_transfers_cost;

        if (score < lowestGameweekScore) {
          lowestGameweekScore = score;
        }

        if (score > highestGameweekScore) {
          highestGameweekScore = score;
        }

        // transfers
        transferCost = transferCost + event.event_transfers_cost;

      });

      averageScore = overallPoints / teamData.entry.current_event;

      // picks
      let totalGoals = 0;
      let totalAssists = 0;
      let totalBonus = 0;
      let totalYellowCards = 0;
      let totalRedCards = 0;
      let totalCleanSheets = 0;
      picks.forEach((player: any) => {
        totalGoals = totalGoals + (player.goalsScored > 0 ? player.goalsScored : 0);
        totalAssists = totalAssists + (player.assists > 0 ? player.assists : 0);
        totalBonus = totalBonus + (player.bonus > 0 ? player.bonus : 0);
        totalYellowCards = totalYellowCards + (player.yellowCards > 0 ? player.yellowCards : 0);
        totalRedCards = totalRedCards + (player.redCards > 0 ? player.redCards : 0);
        if (player.type === 1 || player.type === 2) {
          totalCleanSheets = totalCleanSheets + (player.cleanSheets > 0 ? player.cleanSheets : 0);
        }
      });

      const stats = {
        averageScore,
        highestGameWeekRank,
        highestGameweekScore,
        lowestGameweekRank,
        lowestGameweekScore,
        overallPoints,
        overallRank,
        rankPercentile,
        totalAssists,
        totalBonus,
        totalCleanSheets,
        totalGoals,
        totalRedCards,
        totalTransfers,
        totalValue,
        totalYellowCards,
        transferCost,
      };
      resolve(stats);
    });
  });
}
