import { connect } from '../connect'

import Luminosity from '../../components/Luminosity'

export default connect(state => ({
  luminosity: state.weather,
  time: state.time
}))(Luminosity)
