import React, {
    Component,
    View,
    Text
} from 'react-native';

import styles from './styles';
import Button from 'react-native-awesome-button';

export default class ConditionItem extends Component {

    onPress() {
        this.props.onPress(this.props.conditionId);
    }

    render() {
        const buttonState = {
            idle: {
                text: this.props.title,
                onPress: this.logIn,
                backgroundColor: '#1155DD',
                spinner: true,
                onPress: this.onPress.bind(this)
            },
            busy: {
                text: 'Please wait...',
                backgroundColor: '#002299',
                spinner: true,
            },
            disabled: {
                text: this.props.title,
                backgroundColor: '#ccc'
            }
        };
        return (
            <View style={styles.itemContainer}>
                <Button
                    states={buttonState}
                    transitionDuration={200}
                    buttonState={this.props.itemState}
                    backgroundStyle={styles.itemBackground}/>
            </View>
        );
    }
}
