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


export default class ScheduleVisitSuccess extends Component {
	formatDate(date) {
        if (!date) return '';
        return date.getDate() + '/' + ( date.getMonth() + 1) + '/' + date.getFullYear();
    }

	render() {
		const conditionId = this.props.store.selected_condition;
        const selectedCondition = this.props.store.conditions.entities[conditionId];

        const headingStyle = {color: '#43A047', fontWeight: 'bold'};
		const nextVisit = this.props.store.nextVisit;

        return (
			<ScrollView>
                <ToolBar title={selectedCondition.title} />
                <AppBody>
                    <Heading1 style={headingStyle}>
                        Success!
                    </Heading1>
                    <View>
                    	<Heading1>
                    		Your next visit is scheduled for
                		</Heading1>
						<Text>{this.formatDate(nextVisit.visit.date)} - {nextVisit.visit.time}</Text>
					</View>
                </AppBody>
            </ScrollView>
		);
	}
}

ScheduleVisitSuccess.propTypes = {
    navigator: React.PropTypes.object.isRequired
};
