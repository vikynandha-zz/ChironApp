import ActionTypes from '../actions/actionTypes';

const conditions = {
    1: {
        id: 1,
        title: 'DVT'
    },
    2: {
        id: 2,
        title: 'Diabetese'
    }
};

const initialState = {
    itemStates: {
        1: 'idle',
        2: 'idle'
    },
    conditions: {
        objects: [1, 2],
        entities: conditions
    }
};

function root(state = initialState, action = {}) {
    let itemStates;
    switch(action.type) {
        case ActionTypes.SELECT_CONDITION_FROM_HOME_MENU:
            return Object.assign({}, state, {
                selected_condition: action.payload
            })

        case ActionTypes.LOADING_CONDITION_SETUP:
            conditionId = action.payload.conditionId;
            itemStates = Object.assign({}, state.itemStates);
            itemStates[conditionId] = 'busy';
            state.conditions.objects.map(id => {
                if (id !== conditionId) {
                    itemStates[id] = 'disabled'
                }
            })
            return Object.assign({}, state, {
                itemStates: itemStates
            });
        default:
            return state
    }
}

export default {
    root
};
