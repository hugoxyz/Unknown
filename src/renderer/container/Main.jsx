import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from '../redux/action/Action';
import { Win } from '../component/Win';

function mapStateToProps(state) {
    console.log('mapStateToProps:%O', state);
    return {
        counter: state.counter,
        size: { width: 256, height: 256}
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Win);
