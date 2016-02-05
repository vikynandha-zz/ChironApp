import React, {
    Component,
    View,
    Text
} from 'react-native';

import styles from './styles';

export default class ScheduleVisit extends Component {

    render() {
        return (
            <View>
                <View style={styles.centerView}>
                    <Text style={styles.biggerText}>
                        Schedule Visit
                    </Text>
                </View>
            </View>
        );
    }
}

ScheduleVisit.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
