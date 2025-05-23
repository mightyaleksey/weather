import { connect } from 'react-redux'

import Bg from '../../components/Bg'

export default connect(state => ({ time: state.time }))(Bg)
