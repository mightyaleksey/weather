import {CHANGE_METRIC} from '../actions/weatherActions';

function timeReducer(state = 0, action) {
  if (action.type === CHANGE_METRIC && action.payload.name === 'time') {
    return action.payload.value;
  }

  return state;

}

export default timeReducer;
