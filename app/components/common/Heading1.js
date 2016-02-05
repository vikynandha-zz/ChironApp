import React, {
    Component,
    View,
    Text
} from 'react-native';


export default class Heading1 extends Component {
	render() {
		return (
			<View>
				<Text style={{fontSize: 20, color: '#666'}}>
		    		{this.props.children}
	    		</Text>
			</View>
		);
	}
}