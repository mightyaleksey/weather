import * as React from 'react'

import Actor from '../Actor'
import Bg from '../Bg'
import Luminosity from '../Luminosity'
import Sky from '../Sky'

import css from './Scene.module.css'

function Scene() {
  return (
    <div className={css.scene}>
      <Bg />
      <Sky />
      <Actor className={css.giraffe} name='giraffe' />
      <Actor className={css.zebra} name='zebra' />
      <Luminosity />
    </div>
  )
}

export default Scene
