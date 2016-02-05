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

const subSectionStyle = {
    paddingBottom: 20,
    paddingTop: 20
};

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
                        When is your next visit?
                    </Heading1>
                    <View style={{paddingBottom: 20}}>
                        <Text>TODO: Add Date-Time Picker</Text>
                    </View>
                    <View style={subSectionStyle}>
                        <Text>Blood Sample Collection</Text>
                        <Text>TODO: Add Date-Time Picker</Text>
                    </View>
                    <View style={subSectionStyle}>
                        <Text>Book Appointment</Text>
                        <Text>TODO: Add Date-Time Picker</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <PrimaryButton
                            title="Schedule Visit"
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
