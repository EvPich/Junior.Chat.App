import React from 'react';
import { Text, View } from 'react-native';

import Touch from '../../containers/Touch';
import { themes } from '../../lib/constants';
import { TSupportedThemes, withTheme } from '../../theme';
import styles from './styles';
import { useUserStatusColor } from '../../lib/hooks/useUserStatusColor';

interface SidebarItemProps {
	left: JSX.Element;
	right?: JSX.Element;
	text: string;
	textColor?: string;
	current?: boolean;
	onPress(): void;
	testID: string;
	theme: TSupportedThemes;
	isStatus?:boolean;
	status?:any
}

const Item = React.memo(({ left, right, text, onPress, testID, current, theme, textColor,isStatus,status}: SidebarItemProps) => {

	const isStatusStylesLeft = {width:60}
	const baseStylesLeft = {backgroundColor:current ? '#254385' : '#ECF0F3',width:40}

	const userStatusColor = useUserStatusColor(status);

	textColor = isStatus ? userStatusColor : textColor

	return(
		<Touch
			key={testID}
			testID={testID}
			onPress={onPress}
			style={[styles.item]}
	>
		<View style={[styles.itemHorizontal,isStatus ? isStatusStylesLeft : baseStylesLeft]}>{left}</View>
		<View style={styles.itemCenter}>
			<Text
				style={[styles.itemText, { color:current ? '#254385' : textColor || themes[theme].fontTitlesLabels,fontSize:isStatus ? 18 : 16,fontWeight:current ? '900' : '400'}]}
				numberOfLines={1}
				accessibilityLabel={text}
			>
				{text}
			</Text>
		</View>
		{/* <View style={styles.itemHorizontal}>{right}</View> */}
	</Touch>
	)
});

export default withTheme(Item);
