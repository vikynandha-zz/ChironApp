import React, {
    Component,
    View,
    Text
} from 'react-native';

import MK from 'react-native-material-kit';

const {
  MKTextField,
  MKColor,
  mdl,
} = MK;

import styles from '../styles';



export default class INRInput extends Component {

    render() {
        return <View style={styles.rowContainer}>
            <MKTextField
                underlineEnabled={true}
                floatingLabelEnabled={true}
                keyboardType="numeric"
                placeholder="Current INR Value"
                floatingLabelBottomMargin={2}/>
        </View>
    }

}
