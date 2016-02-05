import { createAction } from 'redux-actions';

import ActionTypes from './actionTypes';

const selectCondition = createAction(
    ActionTypes.SELECT_CONDITION_FROM_HOME_MENU, conditionId => conditionId
);

const loadingConditionSetup = createAction(
    ActionTypes.LOADING_CONDITION_SETUP, conditionId => ({conditionId: conditionId})
);

export function goToConditionSetup(conditionId) {
    return dispatch => {
        dispatch(selectCondition(conditionId));
        dispatch(loadingConditionSetup(conditionId));
    }
}
