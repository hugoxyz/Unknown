import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionType, Action } from '../redux/action';
import { Win } from '../component/Win';

function mapStateToProps(state) {
    console.log('mapStateToProps:%O', state);

    return {
        entitys: state.get('entitys'),
        entitySelected: state.get('entitySelected'),
        size: { width: 256, height: 256}
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Action.EntityAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Win);
