import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MessageType } from '../../../../definitions';
import Edited from './Edited';
import Encrypted from './Encrypted';
import MessageError from './MessageError';
import Pinned from './Pinned';
import ReadReceipt from './ReadReceipt';
import Translated from './Translated';

const styles = StyleSheet.create({
	actionIcons: {
		flexDirection: 'row'
	}
});

interface IRightIcons {
	type: MessageType;
	msg?: string;
	isEdited: boolean;
	isReadReceiptEnabled?: boolean;
	unread?: boolean;
	hasError: boolean;
	isTranslated: boolean;
	pinned?: boolean;
	otherUserMessage?:boolean;
}

const RightIcons = ({
	type,
	msg,
	isEdited,
	hasError,
	isReadReceiptEnabled,
	unread,
	isTranslated,
	pinned,
	otherUserMessage
}: IRightIcons): React.ReactElement => {

	console.log('OtHER',otherUserMessage)

	return(
		<View style={styles.actionIcons}>
			<Pinned pinned={pinned} testID={`${msg}-pinned`} />
			<Encrypted type={type} />
			<Edited testID={`${msg}-edited`} isEdited={isEdited} />
			<MessageError hasError={hasError} />
			<Translated isTranslated={isTranslated} />
			{!otherUserMessage && <ReadReceipt isReadReceiptEnabled={isReadReceiptEnabled} unread={unread} />}
		</View>
)};

export default RightIcons;
