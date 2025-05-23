import * as React from 'react'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/configureStore'
import sagas from './sagas'

const store = configureStore()
store.run(sagas)

const root = ReactDom.createRoot(
  document.getElementById('entry')
)
const render = (Component, store) => {
  root.render(
    <Provider store={store}>
      <Component />
    </Provider>
  )
}

render(App, store)
