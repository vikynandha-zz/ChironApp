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
    conditions: {
        objects: [1, 2],
        entities: conditions
    }
};

function root(state = initialState, action = {}) {
    switch(action.type) {
        default:
            return state
    }
}

export default {
    root
};
