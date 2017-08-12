export const METHOD = {
  DELETE: 'DELETE',
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT',
};

export function fetchJSON(url, method = METHOD.GET, body) {
  const requestBody = typeof body === 'object' ? JSON.stringify(body) : body;
  const opts = {
    credentials: 'same-origin',
    body: requestBody,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    method,
  };

  return window.fetch(url, opts)
    .then(r => {
      if (r.status >= 400) {
        throw new Error(`${method} ${url} ${r.status}`);
      }

      const contentType = r.headers.get('content-type');
      if (contentType !== 'application/json') {
        throw new Error(`${method} ${url} Invalid response`);
      }

      return r.json();
    });
}
