import {CHANGE_METRIC} from '../actions/weatherActions';

function hasUmbrellaReducer(state = false, action) {
  if (action.type === CHANGE_METRIC && action.payload.name === 'weather') {
    return action.payload.value > 0.5;
  }

  return state;
}

export default hasUmbrellaReducer;
