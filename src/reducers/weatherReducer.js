import {CHANGE_METRIC} from '../actions/weatherActions';

function weatherReducer(state = 0, action) {
  if (action.type === CHANGE_METRIC && action.payload.name === 'weather') {
    return action.payload.value;
  }

  return state;
}

export default weatherReducer;
