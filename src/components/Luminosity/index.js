import React from 'react';

import css from './Luminosity.css';

function Luminosity({luminosity, time}) {
  return (
    <div
      className={css.luminosity}
      style={{opacity: (luminosity + time) / 2}} />
  );
}

export default Luminosity;
