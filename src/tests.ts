import 'mocha';
import * as fplApi from './index';

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

});
