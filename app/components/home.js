import React, {
    Component,
    View,
    Text,
} from 'react-native';

import styles from './styles';
import ConditionItem from './conditionItem';

export default class Home extends Component {
    onConditionSelect(conditionId) {
        console.log(conditionId);
    }

    render() {
        const conditions = this.props.store.conditions.objects.map(c => {
            const condition = this.props.store.conditions.entities[c];
            return <ConditionItem
                       key={`condition-list-${c}`}
                       conditionId={condition.id}
                       onPress={this.onConditionSelect.bind(this)}
                       title={condition.title}/>
        })
        return (
                <View>
            <View style={styles.centerView}>
                <Text style={styles.biggerText}>
                    please select your medical condition
                </Text>
            </View>
            {conditions}
                </View>
        );
    }
}

Home.propTypes = {
    store: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired
};
