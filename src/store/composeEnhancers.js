import { compose } from 'redux'
export default composeEnhancers

function composeEnhancers (...enhancers) {
  const c = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  return c(...enhancers)
}
