import React, {
    Component,
    View,
    NativeModules
} from 'react-native';

import {MKTextField} from 'react-native-material-kit';


export default class TimeInput extends Component {

    constructor(props) {
        super(props);
        this.state = {timeValue: this.props.value};
    }

    render() {
        return <View style={{marginTop: 10}}>
            <MKTextField
                ref={component => this._textInput = component}
                underlineEnabled={true}
                floatingLabelEnabled={false}
                keyboardType="default"
                value={this.state.timeValue || ''}
                onFocus={this.showTimePicker.bind(this)}
                floatingLabelBottomMargin={2}/>
        </View>
    }

    showTimePicker() {
        NativeModules.DateAndroid.showTimepicker(function() {}, function(hours, minutes) {
            var formattedTime = hours + ':' + minutes;
            this.setState({ timeValue: formattedTime });
        }.bind(this));
    }

}
