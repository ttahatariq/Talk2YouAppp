import React, {
	useEffect,
	useCallback,
	useState,
	useLayoutEffect,
} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
// import SingleMessage from './SingleMessage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MessagesScreen = ({ route, navigation }) => {
	const userName = route.params;
	const [messages, setMessages] = useState([]);
	const signOutNow = () => {
		console.log('OUT');
	};
	
	useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableHighlight
					style={{ marginRight: 20, backgroundColor: 'blue' }}
					onPress={() => navigation.pop()}
				>
					<MaterialCommunityIcons
						name='chevron-left'
						color={'white'}
						size={30}
					/>
				</TouchableHighlight>
			),
			headerRight: () => (
				<View
					style={{
						marginRight: 10,
						backgroundColor: 'blue',
					}}
				>
					{/* <TouchableOpacity> */}
					<MaterialCommunityIcons
						name='android-messages'
						color={'white'}
						size={40}
					/>
					<Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
						Chats
					</Text>
					{/* </TouchableOpacity> */}
				</View>
			),
		});
	}, [navigation]);

	useEffect(() => {
		console.log('userName is = ',userName.userName);
		
		setMessages([
			{
				_id: 1,
				text: 'One',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: '',
					avatar: 'https://placeimg.com/140/140/any',
				},

				image: 'https://placeimg.com/140/140/any',
  				video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  				sent: true,
  				received: true,
  				pending: true,
				audio:'Audio'
			},
			
		]);

	}, []);

	const onSend = useCallback((messages = []) => {
		console.log(messages)
		setMessages((previousMessages) => 
		// console.log(previousMessages)
			GiftedChat.append(previousMessages, messages),
		);
	}, []);

	return (
		<GiftedChat
			messages={messages}
			// renderMessage={SingleMessage}
			showAvatarForEveryMessage={true}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: '_id',
				name: 'Akhzar Nazir',
				avatar: 'https://placeimg.com/140/140/any',
			}}


	//    renderSend={renderSend}
    //    renderComposer ={renderComposer}
    //    renderInputToolbar ={customtInputToolbar}
       inverted = {true}
       onLongPress = {(context,message)=>{
         setRenderHeaderBar(false)
         setMessageProperties(message)
         Keyboard.dismiss()
       }}
    //    renderBubble = {renderBubble}

		/>
	);
};

export default MessagesScreen;
