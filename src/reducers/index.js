import {combineReducers} from 'redux';

import hasUmbrellaReducer from './hasUmbrellaReducer';
import timeReducer from './timeReducer';
import weatherReducer from './weatherReducer';
import wasMetaLoaded from './wasMetaLoaded';

export default combineReducers({
  hasUmbrella: hasUmbrellaReducer,
  time: timeReducer,
  weather: weatherReducer,
  wasMetaLoaded,
});
