import {expectSaga} from 'redux-saga-test-plan';

import rootSaga from '../../src/sagas';
import {changeMetric} from '../../src/actions/weatherActions';
import {requestSuccess} from '../../src/actions/fetchResourceActions';

describe('rootSaga', () => {
  it('should set weather in case of successful api request', () => {
    const url = '/weather-api';
    expectSaga(rootSaga)
      .put(changeMetric('weather', .3))
      .dispatch(requestSuccess(url, {fact: {condition: 'cloudy'}}))
      .run();
  });
});
