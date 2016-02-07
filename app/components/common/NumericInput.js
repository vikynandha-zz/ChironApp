import React, {
    Component,
    View,
    TextInput
} from 'react-native';


export default class NumericInput extends Component {

    render() {
        return <View style={{marginTop: 10}}>
            <TextInput
                underlineColorAndroid='#00897B'
                keyboardType="numeric"
                placeholder={this.props.label} />
        </View>
    }

}
