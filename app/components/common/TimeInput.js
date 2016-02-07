import React, {
    Component,
    View,
    TextInput,
    NativeModules
} from 'react-native';


export default class TimeInput extends Component {

    constructor(props) {
        super(props);
        this.state = {timeValue: this.props.value};
        if (this.props.onSelect && this.props.value) {
            this.props.onSelect(this.props.value);
        }
    }

    render() {
        return <View style={{marginTop: 10}}>
            <TextInput
                ref={component => this._textInput = component}
                keyboardType="default"
                value={this.state.timeValue || ''}
                onFocus={this.showTimePicker.bind(this)} />
        </View>
    }

    showTimePicker() {
        NativeModules.DateAndroid.showTimepicker(function() {}, function(hours, minutes) {
            var formattedTime = hours + ':' + minutes;
            this.setState({ timeValue: formattedTime });
            if (this.props.onSelect) {
                this.props.onSelect(formattedDate);
            }
        }.bind(this));
    }

}
