import React, { StyleSheet } from 'react-native';

const center = {
    justifyContent: 'center'
}

export default StyleSheet.create({
    centerView: Object.assign({}, center, {
        alignItems: 'center',
    }),
    itemBackground: {
        flex: 1,
        height: 40,
        borderRadius: 5,
    },

    itemLabel: {
        color: 'white'
    }
});
