import React, {
    Component,
    View,
    Text
} from 'react-native';

import styles from './styles';

export default class SetupReminders extends Component {

    render() {
        return (
            <View>
                <View style={styles.centerView}>
                    <Text style={styles.biggerText}>
                        SETUP REMINDERS
                    </Text>
                </View>
            </View>
        );
    }
}

SetupReminders.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
