import React from 'react'
import ReactDom from 'react-dom/client'

import App from './containers/App'
import configureStore from './store/configureStore'
import sagas from './sagas'
import { StoreContext } from './containers/connect'

const store = configureStore()
store.run(sagas)

const root = ReactDom.createRoot(
  document.getElementById('entry')
)
const render = (Component, store) => {
  root.render(
    <StoreContext.Provider value={store}>
      <Component />
    </StoreContext.Provider>
  )
}

render(App, store)

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App, store))
}
