/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import React, { Component, View, Text } from 'react-native';

import HomeScene from '../scenes/home';

class Chiron extends Component {
    render() {
        return (
            <HomeScene store={this.props.store}/>
        );
    }
}

function mapStateToProps(state) {
    return {store: state.root}
}

export default connect(mapStateToProps,
  (dispatch) => ({
  })
)(Chiron);
