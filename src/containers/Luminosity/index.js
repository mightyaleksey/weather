import { connect } from 'react-redux'

import Luminosity from '../../components/Luminosity'

export default connect(state => ({
  luminosity: state.weather,
  time: state.time
}))(Luminosity)
