'use strict';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React from 'react-native';

import {goToConditionSetup} from '../actions/homeScene';
import Home from '../components/home';

function mapStateToProps(state) {
    return {store: state.root}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        goToConditionSetup
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
