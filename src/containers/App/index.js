import * as React from 'react'

import Controls from '../Controls'
import Scene from '../Scene'
import { connect } from '../connect'

import css from './App.module.css'

function App ({ wasMetaLoaded }) {
  if (!wasMetaLoaded) {
    return (
      <div className={css.loaderWrap}>
        <div className={css.loader} />
      </div>
    )
  }

  return (
    <div className={css.app}>
      <Scene />
      <Controls />
    </div>
  )
}

export default connect(state => ({ wasMetaLoaded: state.wasMetaLoaded }))(App)
