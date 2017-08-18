import {delay} from 'redux-saga';
import {call, fork, put, race, take} from 'redux-saga/effects';

import fetchResource from './fetchResource';
import {loaded} from '../actions/appActions';
import {changeMetric} from '../actions/weatherActions';
import {getCurrentTime, getTimeValueByTime, getWeatherValueByCondition} from './utils';
import {REQUEST_ERROR, REQUEST_SUCCESS} from '../actions/fetchResourceActions';
export default rootSaga;

const forecastUrl = '/v1/forecast?geoid=213&lang=en_US'; // 213 - Moscow

function *rootSaga() {
  const time = getTimeValueByTime(getCurrentTime());
  yield put(changeMetric('time', time));

  yield fork(fetchResource, forecastUrl);
  const task = yield race({
    error: take(REQUEST_ERROR),
    success: take(REQUEST_SUCCESS),
  });

  if (task.success) {
    // https://tech.yandex.ru/weather/doc/dg/concepts/translations-docpage/#translations
    const {condition} = task.success.payload.response.fact;
    const weather = getWeatherValueByCondition(condition);
    yield put(changeMetric('weather', weather));
  } else {
    console.error(task.error.payload.exception);
  }

  yield put(loaded());
}
