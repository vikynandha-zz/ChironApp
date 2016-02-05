import React, {
    Component,
    View,
    Text
} from 'react-native';
import PrimaryButton from './common/PrimaryButton';


export default class ConditionItem extends Component {

    onPress() {
        this.props.onPress(this.props.conditionId);
    }

    render() {
        return (
            <View style={{marginTop: 10}}>
                <PrimaryButton
                    title={this.props.title}
                    onPress={this.onPress.bind(this)}/>
            </View>
        );
    }
}
