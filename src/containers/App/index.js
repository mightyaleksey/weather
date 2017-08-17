import React from 'react';
import {connect} from 'react-redux';

import Controls from '../Controls';
import Scene from '../Scene';

import css from './App.css';

function App() {
  return (
    <div className={css.app}>
      <Scene />
      <Controls />
    </div>
  );
}

export default App;
