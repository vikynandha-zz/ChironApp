import React, { Component, Navigator } from 'react-native';

import HomeContainer from '../containers/home';
import routes, { initialRoute } from '../routes';

export default class HomeScene extends Component {
    render() {
        return (
            <Navigator
                initialRoute={initialRoute}
                renderScene={(route, navigator) => {
                    return React.createElement(route.component, {navigator, routes});
                }}/>
        );
    }
}
