import React, {
    Component,
    View,
    Text
} from 'react-native';


export default class Heading1 extends Component {
	render() {
		const style = Object.assign({}, {
			fontSize: 20,
			color: '#666'
		}, this.props.style);
		return (
			<View>
				<Text style={style}>
		    		{this.props.children}
	    		</Text>
			</View>
		);
	}
}