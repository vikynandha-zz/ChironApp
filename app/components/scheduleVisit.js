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

var nextVisit = {
    visit: {date:null, time:null},
    bloodSample: {date:null, time:null},
    bookAppointment: {date:null, time:null}
};

export default class SetupCondition extends Component {

    setNextVisitDate(date) {
        nextVisit.visit.date = date;
    }
    setNextVisitTime(date) {
        nextVisit.visit.time = time;
    }
    setNextBloodSampleDate() {
        nextVisit.bloodSample.date = date;
    }
    setNextBloodSampleTime() {
        nextVisit.bloodSample.time = time;
    }
    setNextBookAppointmentDate() {
        nextVisit.bookAppointment.date = date;
    }
    setNextBookAppointmentTime() {
        nextVisit.bookAppointment.time = time;
    }

    goToScheduleVisit() {
        this.props.goToScheduleVisitSuccess(nextVisit);
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
                        <DateInput 
                            ref="nextVisitDate" 
                            onSelect={this.setNextVisitDate.bind(this)} />
                        <TimeInput 
                            ref="nextVisitTime" 
                            value="16:00"
                            onSelect={this.setNextVisitTime.bind(this)} />
                    </View>
                    <View style={subSectionStyle}>
                        <Heading1>Blood Sample Collection</Heading1>
                        <DateInput
                            ref="nextBloodSampleDate"
                            onSelect={this.setNextBloodSampleDate.bind(this)} />
                        <TimeInput
                            ref="nextBloodSampleTime"
                            value="15:30"
                            onSelect={this.setNextBloodSampleTime.bind(this)} />
                    </View>
                    <View style={subSectionStyle}>
                        <Heading1>Book Appointment</Heading1>
                        <DateInput
                            ref="bookAppointmentDate"
                            onSelect={this.setNextBookAppointmentDate.bind(this)} />
                        <TimeInput
                            ref="bookAppointmentTime"
                            value="10:30"
                            onSelect={this.setNextBookAppointmentTime.bind(this)} />
                    </View>
                    <View style={{marginTop:20}}>
                        <PrimaryButton
                            title="SCHEDULE VISIT"
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
