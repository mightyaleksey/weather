import {call, put} from 'redux-saga/effects';
import {testSaga} from 'redux-saga-test-plan';

import fetchResource from '../../src/sagas/fetchResource';
import {emitRequest, requestSuccess, requestError, requestEnd} from '../../src/actions/fetchResourceActions';
import {fetchJSON} from '../../src/services/fetch';

describe('fetchResource', () => {
  const url = '/somewhere';
  let iterator = null;
  let result = null;

  describe('successful scenario flow', () => {
    beforeEach(() => {
      iterator = fetchResource(url);
      result = iterator.next();
    });

    it('should put an emitRequest action', () => {
      expect(result.value).toEqual(put(emitRequest(url)));
    });

    describe('on the second step', () => {
      beforeEach(() => {
        result = iterator.next();
      });

      it('should call a fetchJSON', () => {
        expect(result.value).toEqual(call(fetchJSON, url));
      });

      describe('on the third step', () => {
        beforeEach(() => {
          result = iterator.next('RESPONSE');
        });

        it('should put an requestSuccess action', () => {
          expect(result.value).toEqual(put(requestSuccess(url, 'RESPONSE')));
        });

        describe('on the fourth step', () => {
          beforeEach(() => {
            result = iterator.next();
          });

          it('should put an requestEnd action', () => {
            expect(result.value).toEqual(put(requestEnd(url)));
          });

          describe('on the final step', () => {
            beforeEach(() => {
              result = iterator.next();
            });

            it('should finish', () => {
              expect(result.done).toBe(true);
            });
          });
        });
      });
    });
  });

  describe('negative scenario flow', () => {
    it('should match the order', () => {
      const url = '/somewhere-else';
      const exception = new Error('NETWORK IS UNREACHABLE');
      testSaga(fetchResource, url).next()
        .put(emitRequest(url)).next()
        .call(fetchJSON, url).throw(exception)
        .put(requestError(url, exception)).next()
        .put(requestEnd(url)).next()
        .isDone();
    });
  });
});
