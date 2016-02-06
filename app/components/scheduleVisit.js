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
import DateInput from './common/DateInput';
import TimeInput from './common/TimeInput';

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
                        <DateInput ref="nextVisitDate"/>
                        <TimeInput ref="nextVisitTime" value="16:00"/>
                    </View>
                    <View style={subSectionStyle}>
                        <Heading1>Blood Sample Collection</Heading1>
                        <DateInput ref="nextBloodSampleDate" />
                        <TimeInput ref="nextBloodSampleTime" value="15:30" />
                    </View>
                    <View style={subSectionStyle}>
                        <Heading1>Book Appointment</Heading1>
                        <DateInput ref="bookAppointmentDate" />
                        <TimeInput ref="bookAppointmentTime" value="10:30" />
                    </View>
                    <View style={{marginTop:20}}>
                        <PrimaryButton
                            title="SCHEDULE VISIT"
                            onPress={null/*this.goToScheduleVisit.bind(this)*/}/>
                    </View>
                </AppBody>
            </ScrollView>
        );
    }
}

SetupCondition.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
