import React, {
    Component,
    View,
    Text,
    NativeModules,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';


export default class DateTimeInput extends Component {

    constructor(props) {
        super(props);
        var value = this.props.date ? new Date(this.props.date) : new Date;

        var time = this.props.time;
        if (time && typeof time === 'string') {
            var split = time.split(':');
            if (split[0]) {
                value.setHours(split[0]);
                value.setMinutes(split[1] || 0);
            }
        }

        this.state = {value: value};
    }

    formatDate(date) {
        if (!date) return '';
        return moment(date).format('ddd MMM D, YYYY');
    }
    formatTime(date) {
        if (!date) return '';
        return moment(date).format('hh:mm a');
    }

    render() {
        return (
            <View style={{marginTop: 10}}>
                <TouchableOpacity onPress={this.showDatePicker.bind(this)}>
                    <Text>{this.formatDate(this.state.value || '')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showTimePicker.bind(this)}>
                    <Text>{this.formatTime(this.state.value || '')}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    showDatePicker() {
        NativeModules.DateAndroid.showDatepicker(function() {}, function(year, monthIndex, day) {
            var date = this.state.value;
            date.setFullYear(year);
            date.setMonth(monthIndex);
            date.setDate(day);
            this.setState({ value: date });

            if (this.props.onSelect) {
                this.props.onSelect(date);
            }
        }.bind(this));
    }

    showTimePicker() {
        // TODO: Retain currently set time in the picker
        NativeModules.DateAndroid.showTimepickerWithInitialTime(
            this.state.value.toISOString(), function() {}, function(hours, minutes) {
            var date = this.state.value;
            date.setHours(hours);
            date.setMinutes(minutes);
            this.setState({ value: date });

            if (this.props.onSelect) {
                this.props.onSelect(date);
            }
        }.bind(this));
    }

}
