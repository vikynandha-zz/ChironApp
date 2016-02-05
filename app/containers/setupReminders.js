'use strict';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React from 'react-native';

import SetupReminders from '../components/setupReminders';

function mapStateToProps(state) {
    return {store: state.root}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SetupReminders);
