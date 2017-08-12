import React from 'react';
import {connect} from 'react-redux';

const Status = connect(state => ({wasMetaLoaded: state.wasMetaLoaded}))(({wasMetaLoaded}) => <span>{`Is Ready: ${wasMetaLoaded}`}</span>);

function App() {
  return (
    <Status />
  );
}

export default App;
