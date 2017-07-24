import 'mocha';
import { players } from './index';
/*
describe('should return correct Team data', () => {

  it('should return team', (done) => {

    fplApi.Team.find(123).then((team) => {
      console.log('team', team);
      done();
    });

  });

  it('should return team picks', (done) => {

    fplApi.Team.getPicks(123).then((picks) => {
      console.log('picks', picks);
      done();
    });

  });

  it('should return team stats', (done) => {

    fplApi.Team.getStats(123).then((stats) => {
      console.log('stats', stats);
      done();
    });

  });

});*/
describe('should return correct Player data', () => {

  it('should return a single player', (done) => {

    players.find(1).then((data) => {
      console.log('player', data);
      done();
    });

  });

  it('should return data for a particular gameweek', (done) => {

    players.getDataForGameWeek(1, 1).then((data) => {
      console.log('player gameweek', data);
      done();
    });

  });

});
