import fetchResource from './fetchResource';
import {delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
export default rootSaga;

function *rootSaga() {
  yield delay(500);
  yield call(fetchResource, '/dist/ok.json');
  yield put({type: 'LOADED'});
}
