import React, {
	Component,
	ToolbarAndroid
} from 'react-native';

const style = {
	height: 56,
	backgroundColor: '#00838F'
};

export default class ToolBar extends Component {
    render() {
        return (
            <ToolbarAndroid
            	title={this.props.title || 'Chiron'}
            	titleColor='rgba(255,255,255,0.87)'
            	style={style}
            />
        );
    }
};
