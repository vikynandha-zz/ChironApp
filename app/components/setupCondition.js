import React, {
    Component,
    View,
    Text
} from 'react-native';

import routes from '../routes';
import styles from './styles';
import INRInput from './dvt/INRInput';
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
} = MK;

export default class SetupCondition extends Component {
    goToReminders() {
        this.props.navigator.push(routes.setupReminders);
    }

    render() {
        const ColoredRaisedButton = MKButton.coloredButton()
                                            .withText('Setup Reminders')
                                            .withOnPress(this.goToReminders.bind(this))
                                            .build();
        return (
            <View>
                <View style={styles.centerView}>
                    <Text style={styles.biggerText}>
                        SETUP
                    </Text>
                    <INRInput/>
                    <ColoredRaisedButton/>
                </View>
            </View>
        );
    }
}

SetupCondition.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
