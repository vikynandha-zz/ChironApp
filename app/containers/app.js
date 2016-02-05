/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {devTools, persistState} from 'redux-devtools'
import createLogger from 'redux-logger'

import Chiron from './chironApp';
import reducers from '../reducers';

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, loggerMiddleware)
)(createStore);

const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer, {});

export default class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <Chiron />
            </Provider>
        );
    }
}
