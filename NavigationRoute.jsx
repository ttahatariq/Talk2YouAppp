import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetRegisterScreen from './Script/Register/GetRegisterScreen.js';
import RegistrationScreen from './Script/Register/RegistrationScreen.js';
import LoginScreen from './Script/Login/LoginScreen.js';
import ChangePasswordScreen from './Script/Settings/ChangePasswordScreen.js';
import MainMenuScreen from './Script/MainMenu/MainMenuScreen.js';
import SettingScreen from './Script/Settings/SettingScreen.js';
import LanguagesScreen from './Script/Languages/LanguagesScreen.js';
import ChatsScreen from './Script/Chats/ChatsScreen.js';
import CallsScreen from './Script/Calls/CallsScreen.js';
import StartNewCallScreen from './Script/Calls/StartNewCallScreen.js';
import StartNewChatScreen from './Script/Chats/StartNewChatScreen.js';
import MessagesScreen from './Script/Chats/MessagesScreen.jsx';
import AudioScreen from './Script/Calls/AudioScreen.jsx';
import { createSwitchNavigator, createStackNavigator } 
  from 'react-navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function NavigationRoute() {
	const [signin, setSignin] = React.useState(null)
	
	const alreadyRegister=async()=>{
		const register = await AsyncStorage.getItem('register')
		if(register=='true'){
			setSignin(true)
		}else{
			setSignin(false)
		}
	}
	React.useLayoutEffect(()=>{
		alreadyRegister()
	},[])
	const getValue = () => {
		return (
		  <Text>Hello, I am your cat!</Text>
		);
	  }
	  if(signin== null){
		return null;
	  }else if(signin ==true)
	  {
		return(
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerTintColor: "blue", headerStyle: { backgroundColor: 'blue' } }}>
			{/* <Stack.Screen name='GetRegisterScreen' component={GetRegisterScreen} options={{ headerShown: true }} /> */}
			{/* <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: true }} /> */}
			<Stack.Screen name='MainMenuScreen' component={MainMenuScreen} options={{ headerShown: true }} />
			<Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} options={{ headerShown: true }} />
			<Stack.Screen name='SettingScreen' component={SettingScreen} options={{ headerShown: true }} />
			<Stack.Screen name='LanguagesScreen' component={LanguagesScreen} options={{ headerShown: true }} />
			<Stack.Screen name='ChatsScreen' component={ChatsScreen} options={{ headerShown: true }} />
			<Stack.Screen name='CallsScreen' component={CallsScreen} options={{ headerShown: true }} />
			<Stack.Screen
				name='StartNewCallScreen'
				component={StartNewCallScreen}
				options={{ headerShown: true }} />
			<Stack.Screen
				name='StartNewChatScreen'
				component={StartNewChatScreen}
				options={{ headerShown: true }} />
			<Stack.Screen
				name='MessagesScreen'
				component={MessagesScreen}
				options={({ route }) => ({ title: route.params.userName })}
			/>
			<Stack.Screen
				name='AudioScreen'
				component={AudioScreen}
				options={({ route }) => ({ title: route.params.userName })}
			/>
		</Stack.Navigator>
			</NavigationContainer>
		);
	  }else{
		return(
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerTintColor: "blue", headerStyle: { backgroundColor: 'blue' } }}>
			<Stack.Screen name='GetRegisterScreen' component={GetRegisterScreen} options={{ headerShown: true }} />
			<Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: true }} />
			<Stack.Screen name='MainMenuScreen' component={MainMenuScreen} options={{ headerShown: true }} />
			<Stack.Screen
				name='RegistrationScreen'
				component={RegistrationScreen} options={{ headerShown: true }}
			/>
			<Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} options={{ headerShown: true }} />
			<Stack.Screen name='SettingScreen' component={SettingScreen} options={{ headerShown: true }} />
			<Stack.Screen name='LanguagesScreen' component={LanguagesScreen} options={{ headerShown: true }} />
			<Stack.Screen name='ChatsScreen' component={ChatsScreen} options={{ headerShown: true }} />
			<Stack.Screen name='CallsScreen' component={CallsScreen} options={{ headerShown: true }} />
			<Stack.Screen
				name='StartNewCallScreen'
				component={StartNewCallScreen}
				options={{ headerShown: true }} />
			<Stack.Screen
				name='StartNewChatScreen'
				component={StartNewChatScreen}
				options={{ headerShown: true }} />
			<Stack.Screen
				name='MessagesScreen'
				component={MessagesScreen}
				options={({ route }) => ({ title: route.params.userName })}
			/>
			<Stack.Screen
				name='AudioScreen'
				component={AudioScreen}
				options={({ route }) => ({ title: route.params.userName })}
			/>
		</Stack.Navigator>
			</NavigationContainer>
		);
	  }
	
}
