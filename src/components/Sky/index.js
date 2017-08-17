import React, {Component} from 'react';
import classNames from 'classnames';

import css from './Sky.css';

class Sky extends Component {
  render() {
    const {weather} = this.props;

    return (
      <div className={css.sky}>
        <div className={classNames({
          [css.stillCloud]: weather < .5,
          [css.rainyCloud]: weather >= .5 && weather <= .8,
          [css.lightningCloud]: weather > .8,
        }, css.pos1)}
        style={{transform: `translateX(${(weather - 1) * 600}px)`}} />
        <div className={classNames({
          [css.stillCloud]: weather < .5,
          [css.rainyCloud]: weather >= .5 && weather <= .8,
          [css.lightningCloud]: weather > .8,
        }, css.pos2)}
        style={{transform: `translateX(${(1 - weather) * 800}px)`}} />
        <div className={classNames({
          [css.stillCloud]: weather < .5,
          [css.rainyCloud]: weather >= .5 && weather <= .8,
          [css.lightningCloud]: weather > .8,
        }, css.pos3)}
        style={{transform: `translateX(${(1 - weather) * 200}px)`}} />
      </div>
    );
  }
}

export default Sky;
