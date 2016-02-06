'use strict';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React from 'react-native';

import ScheduleVisitSuccess from '../components/scheduleVisitSuccess';

function mapStateToProps(state) {
    return {store: state.root}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleVisitSuccess);