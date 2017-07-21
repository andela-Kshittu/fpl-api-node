import 'mocha';
import { players, teams } from '../src/index';

describe('should return correct Team data', () => {

  it('should return team', (done) => {

    teams.find(123).then((team) => {
      // console.log('team', team);
      done();
    });

  });

  it('should return team picks', (done) => {

    teams.getPicks(132).then((picks) => {
      // console.log('picks', picks);
      done();
    });

  });

  it('should return team stats', (done) => {

    teams.getStats(123).then((stats) => {
      // console.log('stats', stats);
      done();
    });

  });

});

describe('should return correct Player data', () => {

  it('should find a single player', (done) => {

    players.find(1).then((player) => {
      // console.log('player', player);
      done();
    });

  });

  it('should find all players', (done) => {

    players.findAll().then((allPlayers) => {
      // console.log('players', allPlayers);
      done();
    });

  });

  it('should find gameweekdata', (done) => {

    players.getStatsForGameweek(1, 1).then((data) => {
     // console.log('gameweek dara', data);
      done();
    });

  });

});
