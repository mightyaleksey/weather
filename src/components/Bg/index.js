import * as React from 'react'

import css from './Bg.module.css'

function Bg (props) {
  const { time } = props

  return (
    <div className={css.bg}>
      <div
        className={css.sun}
        style={{ transform: `translateX(${-time * 700}px) translateY(${time * 100}px)` }}
      />
    </div>
  )
}

export default Bg
