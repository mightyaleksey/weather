import { fork, put, race, take } from 'redux-saga/effects'

import fetchResource from './fetchResource'
import { loaded } from '../actions/appActions'
import { changeMetric } from '../actions/weatherActions'
import { getCurrentTime, getTimeValueByTime, getWeatherValueByCondition } from './utils'
import { REQUEST_ERROR, REQUEST_SUCCESS } from '../actions/fetchResourceActions'
export default rootSaga

// https://api.open-meteo.com/v1/forecast?latitude=55.7524260436815&longitude=37.62280047074998&hourly=weather_code&forecast_days=1
// see https://open-meteo.com/en/docs?latitude=55.7524260436815&longitude=37.62280047074998&forecast_days=1#weather_variable_documentation
const forecastUrl = 'https://api.open-meteo.com/v1/forecast?latitude=55.7524260436815&longitude=37.62280047074998&hourly=weather_code&forecast_days=1'

function * rootSaga () {
  const time = getTimeValueByTime(getCurrentTime())
  yield put(changeMetric('time', time))

  yield fork(fetchResource, forecastUrl)
  const task = yield race({
    error: take(REQUEST_ERROR),
    success: take(REQUEST_SUCCESS)
  })

  if (task.success) {
    const { time, weather_code: weatherCode } = task.success.payload.response.hourly
    const weather = getWeatherValueByCondition(weatherCode, time)
    yield put(changeMetric('weather', weather))
  } else {
    console.error(task.error.payload.exception)
  }

  yield put(loaded())
}
