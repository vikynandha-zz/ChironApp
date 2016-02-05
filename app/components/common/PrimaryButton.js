import React, {
    Component,
    View,
    Text
} from 'react-native';
import {MKButton} from 'react-native-material-kit';


export default class ConditionItem extends Component {

    render() {
        const ColoredRaisedButton = MKButton.coloredButton()
            .withStyle({backgroundColor:'#689F38'})
            .withText(this.props.title)
            .withOnPress(this.props.onPress.bind(this))
            .build();

        return (
            <View style={{marginTop: 10}}>
                <ColoredRaisedButton />
            </View>
        );
    }
}
