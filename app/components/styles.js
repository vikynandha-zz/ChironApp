import React, { StyleSheet } from 'react-native';

const center = {
    justifyContent: 'center'
}

export default StyleSheet.create({
    centerView: Object.assign({}, center, {
        alignItems: 'center',
    }),
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    biggerText: {
        fontSize: 22,
        fontWeight: 'bold'
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
