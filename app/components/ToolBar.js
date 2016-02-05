import React, {
	Component,
	ToolbarAndroid
} from 'react-native';

const style = {
	height: 56,
	backgroundColor: '#00897B'
};

export default class ToolBar extends Component {
    render() {
        return (
            <ToolbarAndroid
            	title='Chiron'
            	titleColor='rgba(255,255,255,0.87)'
            	style={style}
            />
        );
    }
};
