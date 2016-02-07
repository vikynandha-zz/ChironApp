import React, {
    Component,
    View,
    ScrollView,
    Text
} from 'react-native';

import routes from '../routes';
import styles from './styles';
import ToolBar from './common/ToolBar';
import AppBody from './common/AppBody';
import Heading1 from './common/Heading1';
import PrimaryButton from './common/PrimaryButton';
import NumericInput from './common/NumericInput';

export default class SetupCondition extends Component {
    goToScheduleVisit() {
        this.props.navigator.push(routes.scheduleVisit);
    }

    render() {
        const conditionId = this.props.store.selected_condition;
        const selectedCondition = this.props.store.conditions.entities[conditionId];
        return (
            <ScrollView>
                <ToolBar title={selectedCondition.title} />
                <AppBody>
                    <Heading1>
                        Your current reading & dosage
                    </Heading1>
                    <NumericInput ref="inrValue" label='PT-INR Value'/>
                    <NumericInput ref="acitromDosage" label='Acitrom Dosage'/>
                    <View style={{marginTop:20}}>
                        <PrimaryButton
                            title="Save"
                            onPress={this.goToScheduleVisit.bind(this)}/>
                    </View>
                </AppBody>
            </ScrollView>
        );
    }
}

SetupCondition.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
