import React, {
    Component,
    View,
    ScrollView,
    Text
} from 'react-native';

import routes from '../routes';
import styles from './styles';
import ToolBar from './common/ToolBar';
import AppBody from './common/AppBody';
import Heading1 from './common/Heading1';
import PrimaryButton from './common/PrimaryButton';
import NumericInput from './common/NumericInput';
const MK = require('react-native-material-kit');
const {
  MKButton,
  MKColor,
} = MK;

export default class SetupCondition extends Component {
    goToScheduleVisit() {
        this.props.navigator.push(routes.scheduleVisit);
    }

    render() {
        return (
            <ScrollView>
                <ToolBar />
                <AppBody>
                    <Heading1>
                        Your current reading & dosage
                    </Heading1>
                    <NumericInput label='PT-INR Value'/>
                    <NumericInput label='Acitrom Dosage'/>
                    <View style={{marginTop:20}}>
                        <PrimaryButton
                            title="Save"
                            onPress={this.goToScheduleVisit.bind(this)}/>
                    </View>
                </AppBody>
            </ScrollView>
        );
    }
}

SetupCondition.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
