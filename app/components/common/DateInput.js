import React, {
    Component,
    View,
    TextInput,
    NativeModules
} from 'react-native';


export default class DateInput extends Component {

    constructor(props) {
        super(props);
        this.state = {dateValue: this.props.value};
    }

    formatDate(date) {
        if (!date) return '';
        return date.getDate() + '/' + ( date.getMonth() + 1) + '/' + date.getFullYear();
    }

    render() {
        return <View style={{marginTop: 10}}>
            <TextInput
                autoFocus={this.props.autoFocus}
                ref={component => this._textInput = component}
                keyboardType="default"
                placeholder="dd/mm/yyyy"
                value={this.formatDate(this.state.dateValue || '')}
                onFocus={this.showDatePicker.bind(this)} />
        </View>
    }

    showDatePicker() {
        NativeModules.DateAndroid.showDatepicker(function() {}, function(year, monthIndex, day) {
            var date = new Date(year, monthIndex, day);
            this.setState({ dateValue: date });
            if (this.props.onSelect) {
                this.props.onSelect(date);
            }
        }.bind(this));
    }

}
