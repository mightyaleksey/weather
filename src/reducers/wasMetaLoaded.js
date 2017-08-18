import {LOADED} from '../actions/appActions';
export default wasMetaLoaded;

function wasMetaLoaded(state = false, action) {
  if (action.type === LOADED) return true;
  return state;
}
