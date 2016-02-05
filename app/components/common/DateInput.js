import React, {
    Component,
    View,
    NativeModules
} from 'react-native';

import {MKTextField} from 'react-native-material-kit';


export default class DateInput extends Component {

    constructor(props) {
        super(props);
        this.state = {dateValue: this.props.value};
    }

    render() {
        return <View style={{marginTop: 10}}>
            <MKTextField
                autoFocus={this.props.autoFocus}
                ref={component => this._textInput = component}
                underlineEnabled={true}
                floatingLabelEnabled={false}
                keyboardType="default"
                placeholder="dd/mm/yyyy"
                value={this.state.dateValue || ''}
                onFocus={this.showDatePicker.bind(this)}
                floatingLabelBottomMargin={2}/>
        </View>
    }

    showDatePicker() {
        NativeModules.DateAndroid.showDatepicker(function() {}, function(year, monthIndex, day) {
            var formattedDate = day + '/' + (monthIndex + 1) + '/' + year;
            this.setState({ dateValue: formattedDate });
        }.bind(this));
    }

}
