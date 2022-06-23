import composeEnhancers from './composeEnhancers'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import { applyMiddleware, createStore } from 'redux'
export default configureStore

function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducers, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ))

  store.run = sagas => sagaMiddleware.run(sagas)
  return store
}
