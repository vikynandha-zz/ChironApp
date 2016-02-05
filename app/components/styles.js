import React, { StyleSheet } from 'react-native';

const center = {
    justifyContent: 'center'
}

export default StyleSheet.create({
    appContainer: {
        padding: 20
    },
    centerView: Object.assign({}, center, {
        alignItems: 'center',
    }),
    biggerText: {
        fontSize: 20
    },

    itemBackground: {
        flex: 1,
        height: 40,
        borderRadius: 5,
    },

    itemLabel: {
    color: 'white'
  }
});
