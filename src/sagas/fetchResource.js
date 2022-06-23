import { call, put } from 'redux-saga/effects'
import {
  emitRequest,
  requestError,
  requestSuccess,
  requestEnd
} from '../actions/fetchResourceActions'
import { fetchJSON } from '../services/fetch'
export default fetchResource

function * fetchResource (url) {
  yield put(emitRequest(url))

  try {
    const response = yield call(fetchJSON, url)
    yield put(requestSuccess(url, response))
  } catch (err) {
    yield put(requestError(url, err))
  } finally {
    yield put(requestEnd(url))
  }
}
