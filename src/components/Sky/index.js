import * as React from 'react'
import classNames from 'classnames'

import css from './Sky.module.css'

function Sky (props) {
  const { weather } = props

  return (
    <div className={css.sky}>
      <div
        className={classNames({
          [css.stillCloud]: weather < 0.5,
          [css.rainyCloud]: weather >= 0.5 && weather <= 0.8,
          [css.lightningCloud]: weather > 0.8
        }, css.pos1)}
        style={{ transform: `translateX(${(weather - 1) * 600}px)` }}
      />
      <div
        className={classNames({
          [css.stillCloud]: weather < 0.5,
          [css.rainyCloud]: weather >= 0.5 && weather <= 0.8,
          [css.lightningCloud]: weather > 0.8
        }, css.pos2)}
        style={{ transform: `translateX(${(1 - weather) * 800}px)` }}
      />
      <div
        className={classNames({
          [css.stillCloud]: weather < 0.5,
          [css.rainyCloud]: weather >= 0.5 && weather <= 0.8,
          [css.lightningCloud]: weather > 0.8
        }, css.pos3)}
        style={{ transform: `translateX(${(1 - weather) * 200}px)` }}
      />
    </div>
  )
}

export default Sky
