import { StyleSheet } from 'react-native';

import sharedStyles from '../Styles';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical:5,
		paddingLeft:30
	},
	itemCurrent: {
		backgroundColor: '#E1E5E8'
	},
	itemHorizontal: {
		marginHorizontal: 10,
		width: 40,
		height:40,
		borderRadius:12,
		alignItems: 'center',
		justifyContent:'center',
	},
	itemCenter: {
		flex: 1
	},
	itemText: {
		marginVertical: 16,
		fontSize: 14,
		...sharedStyles.textSemibold
	},
	separator: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginVertical: 4
	},
	header: {
		paddingVertical: 16,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft:25
	},
	headerTextContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start'
	},
	headerUsername: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	username: {
		fontSize: 18,
		...sharedStyles.textBold
	},
	avatar: {
		marginHorizontal: 10,
	},
	currentServerText: {
		fontSize: 14,
		...sharedStyles.textSemibold
	},
	version: {
		marginHorizontal: 10,
		marginBottom: 10,
		fontSize: 13,
		...sharedStyles.textSemibold
	},
	inverted: {
		transform: [{ scaleY: -1 }]
	},
	customStatusDisabled: {
		width: 10,
		height: 10,
		borderRadius: 5
	}
});
