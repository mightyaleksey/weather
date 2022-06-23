import Actor from '../../components/Actor'
import { connect } from '../connect'

export default connect(state => ({ umbrella: state.hasUmbrella }))(Actor)
