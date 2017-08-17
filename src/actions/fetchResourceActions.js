export const EMIT_REQUEST = 'EMIT_REQUEST';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_END = 'REQUEST_END';

export function emitRequest(url) {
  return ({
    type: EMIT_REQUEST,
    payload: {url},
  });
}

export function requestError(url, err) {
  return ({
    type: REQUEST_ERROR,
    payload: {url, exception: err.message},
  });
}

export function requestSuccess(url, response) {
  return ({
    type: REQUEST_SUCCESS,
    payload: {url, response},
  });
}

export function requestEnd(url) {
  return ({
    type: REQUEST_END,
    payload: {url},
  });
}
