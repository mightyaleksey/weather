import {connect} from 'react-redux';

import Sky from '../../components/Sky';

export default connect(state => ({weather: state.weather}))(Sky);
