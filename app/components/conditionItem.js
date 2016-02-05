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
                onPress: this.onPress.bind(this)
            },
            busy: {
                text: this.props.title,
                backgroundColor: '#002299',
                spinner: true,
            },
            success: {
                text: this.props.title,
                backgroundColor: '#339944'
            }
        };
        return (
            <View style={styles.itemContainer}>
                <Button
                    states={buttonState}
                    transitionDuration={200}
                    buttonState={'idle'}
                    backgroundStyle={styles.itemBackground}/>
            </View>
        );
    }
}
