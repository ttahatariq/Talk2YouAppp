import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./MainMenuStyles";

export default function MainMenuScreen({ navigation }) {
  const [language, setLanguage] = useState()
  
  const checkValues=async()=>{
    const retrieveData = await AsyncStorage.getItem('userData') 
    // console.log('retrieveData is = ',retrieveData)
  }

  useEffect(() => {
    checkValues()
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('is This called', global.language)
      AsyncStorage.getItem( 'userData' )
      .then( data => {
        data = JSON.parse( data );
        console.log('data.language',data.language)
        console.log('data.language',data.language)
        setLanguage(data.language)
      }).done();  
      // setLanguage(global.language)
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/backgroundpics/greywhite.png")}
        style={styles.ImageBackground}>

        <TouchableOpacity style={styles.ButtonStyle}
          onPress={() => navigation.navigate('LanguagesScreen')}
        >
          <View style={styles.buttonsIcon}>
            <Image style={styles.image} source={require("../../assets/icons/languages-icon.png")} />
          </View>
          <View style={styles.buttonsTitle}>
            <Text style={styles.ButtonText}>Languages</Text>
          </View>
          <View style={styles.buttonFlag}>
            {language ?
              (<Image style={styles.imageFlag} source={language} />) : (null)
            }
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle}
          onPress={() => navigation.navigate('CallsScreen')}
        >
          <View style={styles.buttonsIcon}>
            <Image style={styles.image} source={require("../../assets/icons/calls-icon.png")} />
          </View>
          <View style={styles.buttonsTitle}>
            <Text style={styles.ButtonText}>Calls</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle}
          onPress={() => navigation.navigate('ChatsScreen')}
        >
          <View style={styles.buttonsIcon}>
            <Image style={styles.image} source={require("../../assets/icons/chat-icon.png")} />
          </View>
          <View style={styles.buttonsTitle}>
            <Text style={styles.ButtonText}>Chats</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonStyle}
          onPress={() => navigation.navigate('SettingScreen')}
        >
          <View style={styles.buttonsIcon}>
            <Image style={styles.image} source={require("../../assets/icons/settings-icon.png")} />
          </View>
          <View style={styles.buttonsTitle}>
            <Text style={styles.ButtonText}>Setting</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ButtonStyle}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <View style={styles.buttonsIcon}>
            <Image style={styles.image} source={require("../../assets/icons/logout-icon.png")} />
          </View>
          <View style={styles.buttonsTitle}>
            <Text style={styles.ButtonText}>Logout</Text>
          </View>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}
