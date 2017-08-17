import React, {Component} from 'react';
import {connect} from 'react-redux';

import Range from '../../components/Range';
import {changeMetric} from '../../actions/weatherActions';

import css from './Controls.css';

const Weather = link('weather')(Range);
const Time = link('time')(Range);

class Controls extends Component {
  render() {
    return (
      <div className={css.controls}>
        <Weather
          className={css.range}
          left='Sunny'
          right='Rainy' />
        <Time
          className={css.range}
          left='Day'
          right='Night' />
      </div>
    );
  }
}

export default Controls;

function link(fieldName) {
  return connect(
    state => ({
      name: fieldName,
      value: state[fieldName],
    }),
    dispatch => ({
      onChange: (value, name) => dispatch(changeMetric(name, value)),
    })
  );
}
