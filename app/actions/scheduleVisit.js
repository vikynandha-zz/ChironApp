import { createAction } from 'redux-actions';

import ActionTypes from './actionTypes';

const scheduleVisit = createAction(
    ActionTypes.SCHEDULE_VISIT, nextVisit => ({nextVisit: nextVisit})
);

export function goToScheduleVisitSuccess(nextVisit) {
	return dispatch => {
        dispatch(scheduleVisit(nextVisit));
    }
}
