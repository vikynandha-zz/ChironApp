import React, {
    Component,
    View,
    Text,
    BackAndroid
} from 'react-native';

import styles from './styles';
import ConditionItem from './conditionItem';
import ToolBar from './ToolBar';
import AppBody from './AppBody';
import Heading1 from './Heading1';

export default class Home extends Component {
    onConditionSelect(conditionId) {
        console.log(conditionId);
        this.props.goToConditionSetup(conditionId);
        this.props.navigator.push(this.props.routes.setupCondition);
    }

    goBack() {
        this.props.navigator.pop();
    }

    componentDidMount() {

        BackAndroid.addEventListener('hardwareBackPress', function() {
            this.goBack();
            return true;
        }.bind(this));

    }

    render() {
        const conditions = this.props.store.conditions.objects.map(c => {
            const condition = this.props.store.conditions.entities[c];
            return <ConditionItem
                       key={`condition-list-${c}`}
                       conditionId={condition.id}
                       itemState={this.props.store.itemStates[condition.id]}
                       onPress={this.onConditionSelect.bind(this)}
                       title={condition.title}/>;
        });

        return (
            <View>
                <ToolBar />
                <AppBody>
                    <Heading1>
                        Please select your medical condition
                    </Heading1>
                    {conditions}
                </AppBody>
            </View>
        );
    }
};

Home.propTypes = {
    store: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired
};
