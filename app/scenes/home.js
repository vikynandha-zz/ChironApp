import React, { Component, Navigator } from 'react-native';

import Home from '../components/home';

export default class HomeScene extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'Home Scene', index: 0, component: Home}}
                renderScene={(route, navigator) => {
                    return React.createElement(route.component, {store: this.props.store, navigator: navigator});
                }}/>
        );
    }
}


HomeScene.propTypes = {
    store: React.PropTypes.object.isRequired
};
