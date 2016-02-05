import React, {
    Component,
    View,
    Text
} from 'react-native';

import styles from './styles';

export default class SetupCondition extends Component {

    render() {
        return (
            <View>
                <View style={styles.centerView}>
                    <Text style={styles.biggerText}>
                        setup
                    </Text>
                </View>
            </View>
        );
    }
}

SetupCondition.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
