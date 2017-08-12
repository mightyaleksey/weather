import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import App from './containers/App';
import configureStore from './store/configureStore';
import sagas from './sagas';

const store = configureStore();
store.run(sagas);

const render = (Component, store) => {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('entry')
  );
}

render(App, store);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App, store));
}
