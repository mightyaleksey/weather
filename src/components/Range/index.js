import React, {Component} from 'react';
import classNames from 'classnames';

import css from './Range.css';

class Range extends Component {
  constructor(props) {
    super(props);

    this.hanldeChange = this.hanldeChange.bind(this);
  }

  hanldeChange(e) {
    const {name, value} = e.target;
    const nextValue = Number(value) / 100;
    this.props.onChange(nextValue, name);
  }

  render() {
    const {
      className,
      left,
      right,
      name,
      onChange,
      value,
    } = this.props;

    const valueToRender = String(value * 100);

    return (
      <div className={classNames(css.range, className)}>
        <span className={css.labelLeft}>{left}</span>{' '}
        <span className={css.labelRight}>{right}</span>
        <input
          className={css.control}
          name={name}
          onChange={this.hanldeChange}
          type='range'
          value={valueToRender} />
      </div>
    );
  }
}

export default Range;
