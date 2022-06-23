import * as React from 'react'
import classNames from 'classnames'

import css from './Actor.module.css'

function Actor (props) {
  const { className, name, umbrella } = props

  return (
    <div className={classNames({
      [css.giraffeActor]: name === 'giraffe',
      [css.zebraActor]: name === 'zebra'
    }, className)}
    >
      <div className={classNames({
        [css.giraffe]: name === 'giraffe',
        [css.zebra]: name === 'zebra'
      })}
      />
      <div className={classNames({
        [css.umbrellaBlueForGiraffe]: name === 'giraffe',
        [css.umbrellaYellowForZebra]: name === 'zebra',
        [css.hidden]: !umbrella
      })}
      />
    </div>
  )
}

export default Actor
