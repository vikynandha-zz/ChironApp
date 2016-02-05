/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React, {
    Component,
    Image,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';

class Chiron extends Component {
    render() {
        var movie = MOCKED_MOVIES_DATA[0];

    return (
        <View style={styles.container}>
            <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.year}>{movie.year}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    }
});


export default connect(state => ({
  }),
  (dispatch) => ({
  })
)(Chiron);
