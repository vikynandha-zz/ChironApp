import React, {
    Component,
    View
} from 'react-native';

import {MKTextField} from 'react-native-material-kit';


export default class NumericInput extends Component {

    render() {
        return <View style={{marginTop: 10}}>
            <MKTextField
                underlineEnabled={true}
                floatingLabelEnabled={true}
                keyboardType="numeric"
                placeholder={this.props.label}
                floatingLabelBottomMargin={2}/>
        </View>
    }

}
