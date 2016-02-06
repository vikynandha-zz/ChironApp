'use strict';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React from 'react-native';

import {goToScheduleVisitSuccess} from '../actions/scheduleVisit';
import ScheduleVisit from '../components/scheduleVisit';

function mapStateToProps(state) {
    return {store: state.root}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    	goToScheduleVisitSuccess
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleVisit);