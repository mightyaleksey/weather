import { connect } from 'react-redux'

import Actor from '../../components/Actor'

export default connect(state => ({ umbrella: state.hasUmbrella }))(Actor)
