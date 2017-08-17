import React, {Component} from 'react';
import classNames from 'classnames';

import css from './Bg.css';

class Bg extends Component {
  render() {
    const {time} = this.props;

    return (
      <div className={css.bg}>
        <div
          className={css.sun}
          style={{transform: `translateX(${-time * 700}px) translateY(${time * 100}px)`}} />
      </div>
    );
  }
}

export default Bg;
