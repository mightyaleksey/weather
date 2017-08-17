import React, {Component} from 'react';

import Actor from '../Actor';
import Bg from '../Bg';
import Luminosity from '../Luminosity';
import Sky from '../Sky';

import css from './Scene.css';

class Scene extends Component {
  render() {
    return (
      <div className={css.scene}>
        <Bg />
        <Sky />
        <Actor className={css.giraffe} name='giraffe' />
        <Actor className={css.zebra} name='zebra' />
        <Luminosity />
      </div>
    );
  }
}

export default Scene;
