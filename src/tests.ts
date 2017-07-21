import 'mocha';
import {FplApi} from './index';

describe('should return correct properties and types', () => {

  it('should return correct getBootstrappedData()', (done) => {

    const fplApi = new FplApi();
    console.log(fplApi.getX());

    done();
    /*
    fplapi.getBootstrappedData().then((data) => {
      done();

    }).catch((error) => {
      done(new Error(error));
    });  */
  });

});
