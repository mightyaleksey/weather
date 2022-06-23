import Bg from '../../components/Bg'
import { connect } from '../connect'

export default connect(state => ({ time: state.time }))(Bg)
