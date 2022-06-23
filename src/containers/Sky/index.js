import Sky from '../../components/Sky'
import { connect } from '../connect'

export default connect(state => ({ weather: state.weather }))(Sky)
