import React, {
    Component,
    View,
    Text
} from 'react-native';
import {MKButton} from 'react-native-material-kit';


export default class ConditionItem extends Component {

    onPress() {
        this.props.onPress(this.props.conditionId);
    }

    render() {
        const ColoredRaisedButton = MKButton.coloredButton()
            .withText(this.props.title)
            .withOnPress(this.onPress.bind(this))
            .build();

        return (
            <View style={{marginTop: 10}}>
                <ColoredRaisedButton />
            </View>
        );
    }
}
