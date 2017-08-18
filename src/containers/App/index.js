import React from 'react';
import {connect} from 'react-redux';

import Controls from '../Controls';
import Scene from '../Scene';

import css from './App.css';

function App({wasMetaLoaded}) {
  if (!wasMetaLoaded) {
    return (
      <div className={css.loaderWrap}>
        <div className={css.loader} />
      </div>
    );
  }

  return (
    <div className={css.app}>
      <Scene />
      <Controls />
    </div>
  );
}

export default connect(state => ({wasMetaLoaded: state.wasMetaLoaded}))(App);
