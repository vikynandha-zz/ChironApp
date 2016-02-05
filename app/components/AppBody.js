import React, {
    Component,
    View
} from 'react-native';


export default class AppBody extends Component {
	render() {
		return (
			<View style={{padding: 20}}>
		    	{this.props.children}
			</View>
		);
	}
}