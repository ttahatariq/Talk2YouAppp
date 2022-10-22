import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";

const GLOBAL = require('../Helper/Globals');
import getApiHook from '../ApiHooks/GetApiHook'
import styles from "./LanguagesStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ({ navigation }) {

  const url = GLOBAL.BASE_URL + 'languages'
  const { data, loading, error } = getApiHook(url);

  const render_image = (imgName) => {
    // console.log('imgName is', imgName)
    var img = {}
    if (imgName == 'afrikaans') {
      img = {
        src: require('../../assets/languages/afrikaans.png')
      }
    } else if (imgName == 'albanian') {
      img = {
        src: require('../../assets/languages/albanian.png')
      }
    } else if (imgName == 'arabic') {
      img = {
        src: require('../../assets/languages/arabic.png')
      }
    } else if (imgName == 'azeri') {
      img = {
        src: require('../../assets/languages/azeri.png')
      }
    } else if (imgName == 'belarusian') {
      img = {
        src: require('../../assets/languages/belarusian.png')
      }
    } else if (imgName == 'bengali') {
      img = {
        src: require('../../assets/languages/bengali.png')
      }
    } else if (imgName == 'bosnian') {
      img = {
        src: require('../../assets/languages/bosnian.png')
      }
    } else if (imgName == 'bulgarian') {
      img = {
        src: require('../../assets/languages/bulgarian.png')
      }
    } else if (imgName == 'catalan') {
      img = {
        src: require('../../assets/languages/catalan.png')
      }
    } else if (imgName == 'chinese') {
      img = {
        src: require('../../assets/languages/chinese.png')
      }
    } else if (imgName == 'croatian') {
      img = {
        src: require('../../assets/languages/croatian.png')
      }
    } else if (imgName == 'czech') {
      img = {
        src: require('../../assets/languages/czech.png')
      }
    } else if (imgName == 'danish') {
      img = {
        src: require('../../assets/languages/danish.png')
      }
    } else if (imgName == 'dari') {
      img = {
        src: require('../../assets/languages/dari.png')
      }
    } else if (imgName == 'divehi') {
      img = {
        src: require('../../assets/languages/divehi.png')
      }
    } else if (imgName == 'dutch') {
      img = {
        src: require('../../assets/languages/dutch.png')
      }
    } else if (imgName == 'english_gb') {
      img = {
        src: require('../../assets/languages/english_gb.png')
      }
    } else if (imgName == 'english_us') {
      img = {
        src: require('../../assets/languages/english_us.png')
      }
    } else if (imgName == 'estonian') {
      img = {
        src: require('../../assets/languages/estonian.png')
      }
    } else if (imgName == 'filipino') {
      img = {
        src: require('../../assets/languages/filipino.png')
      }
    } else if (imgName == 'finnish') {
      img = {
        src: require('../../assets/languages/finnish.png')
      }
    } else if (imgName == 'french') {
      img = {
        src: require('../../assets/languages/french.png')
      }
    } else if (imgName == 'galician') {
      img = {
        src: require('../../assets/languages/galician.png')
      }
    } else if (imgName == 'georgian') {
      img = {
        src: require('../../assets/languages/georgian.png')
      }
    } else if (imgName == 'german') {
      img = {
        src: require('../../assets/languages/german.png')
      }
    } else if (imgName == 'greek') {
      img = {
        src: require('../../assets/languages/greek.png')
      }
    } else if (imgName == 'gujarati') {
      img = {
        src: require('../../assets/languages/gujarati.png')
      }
    } else if (imgName == 'hausa') {
      img = {
        src: require('../../assets/languages/hausa.png')
      }
    } else if (imgName == 'hebrew') {
      img = {
        src: require('../../assets/languages/hebrew.png')
      }
    } else if (imgName == 'hindi') {
      img = {
        src: require('../../assets/languages/hindi.png')
      }
    } else if (imgName == 'hongkong') {
      img = {
        // Hong Kon Does Not Exist
        src: require('../../assets/languages/hungarian.png')
      }
    } else if (imgName == 'hungarian') {
      img = {
        src: require('../../assets/languages/hungarian.png')
      }
    } else if (imgName == 'igbo') {
      img = {
        src: require('../../assets/languages/igbo.png')
      }
    } else if (imgName == 'indonesian') {
      img = {
        src: require('../../assets/languages/indonesian.png')
      }
    } else if (imgName == 'isixhosa') {
      img = {
        src: require('../../assets/languages/isixhosa.png')
      }
    } else if (imgName == 'italian') {
      img = {
        src: require('../../assets/languages/italian.png')
      }
    } else if (imgName == 'japanese') {
      img = {
        src: require('../../assets/languages/japanese.png')
      }
    } else if (imgName == 'kannada') {
      img = {
        src: require('../../assets/languages/kannada.png')
      }
    } else if (imgName == 'kazakh') {
      img = {
        src: require('../../assets/languages/kazakh.png')
      }
    } else if (imgName == 'khmer') {
      img = {
        src: require('../../assets/languages/khmer.png')
      }
    } else if (imgName == 'kinyarwanda') {
      img = {
        src: require('../../assets/languages/kinyarwanda.png')
      }
    } else if (imgName == 'korean') {
      img = {
        src: require('../../assets/languages/korean.png')
      }
    } else if (imgName == 'kurdish') {
      img = {
        src: require('../../assets/languages/kurdish.png')
      }
    } else if (imgName == 'lao') {
      img = {
        src: require('../../assets/languages/lao.png')
      }
    } else if (imgName == 'latvian') {
      img = {
        src: require('../../assets/languages/latvian.png')
      }
    } else if (imgName == 'lithuanian') {
      img = {
        src: require('../../assets/languages/lithuanian.png')
      }
    } else if (imgName == 'macedonian') {
      img = {
        src: require('../../assets/languages/macedonian.png')
      }
    } else if (imgName == 'malay') {
      img = {
        src: require('../../assets/languages/malay.png')
      }
    } else if (imgName == 'malayalam') {
      img = {
        src: require('../../assets/languages/malayalam.png')
      }
    } else if (imgName == 'maltese') {
      img = {
        src: require('../../assets/languages/maltese.png')
      }
    } else if (imgName == 'maori') {
      img = {
        // maori Does Not Exist
        src: require('../../assets/languages/maltese.png')
      }
    } else if (imgName == 'marathi') {
      img = {
        src: require('../../assets/languages/marathi.png')
      }
    } else if (imgName == 'mongolian') {
      img = {
        src: require('../../assets/languages/mongolian.png')
      }
    } else if (imgName == 'nepali') {
      img = {
        src: require('../../assets/languages/nepali.png')
      }
    } else if (imgName == 'norwegian') {
      img = {
        src: require('../../assets/languages/norwegian.png')
      }
    } else if (imgName == 'pashto') {
      img = {
        src: require('../../assets/languages/pashto.png')
      }
    } else if (imgName == 'persian') {
      img = {
        src: require('../../assets/languages/persian.png')
      }
    } else if (imgName == 'polish') {
      img = {
        src: require('../../assets/languages/polish.png')
      }
    } else if (imgName == 'arabic') {
      img = {
        src: require('../../assets/languages/arabic.png')
      }
    } else if (imgName == 'portuguese') {
      img = {
        src: require('../../assets/languages/portuguese.png')
      }
    } else if (imgName == 'punjabi') {
      img = {
        src: require('../../assets/languages/punjabi.png')
      }
    } else if (imgName == 'romanian') {
      img = {
        src: require('../../assets/languages/romanian.png')
      }
    } else if (imgName == 'russian') {
      img = {
        src: require('../../assets/languages/russian.png')
      }
    } else if (imgName == 'serbian') {
      img = {
        src: require('../../assets/languages/serbian.png')
      }
    } else if (imgName == 'sinhala') {
      img = {
        src: require('../../assets/languages/sinhala.png')
      }
    } else if (imgName == 'slovak') {
      img = {
        src: require('../../assets/languages/slovak.png')
      }
    } else if (imgName == 'slovenian') {
      img = {
        src: require('../../assets/languages/slovenian.png')
      }
    } else if (imgName == 'somali') {
      img = {
        src: require('../../assets/languages/somali.png')
      }
    } else if (imgName == 'spanish') {
      img = {
        src: require('../../assets/languages/spanish.png')
      }
    } else if (imgName == 'swedish') {
      img = {
        src: require('../../assets/languages/swedish.png')
      }
    } else if (imgName == 'tamil') {
      img = {
        src: require('../../assets/languages/tamil.png')
      }
    } else if (imgName == 'telugu') {
      img = {
        // telugu does not exist
        src: require('../../assets/languages/tamil.png')
      }
    } else if (imgName == 'thai') {
      img = {
        src: require('../../assets/languages/thai.png')
      }
    } else if (imgName == 'tibetan') {
      img = {
        src: require('../../assets/languages/tibetan.png')
      }
    } else if (imgName == 'turkish') {
      img = {
        src: require('../../assets/languages/turkish.png')
      }
    } else if (imgName == 'ukrainian') {
      img = {
        src: require('../../assets/languages/ukrainian.png')
      }
    } else if (imgName == 'urdu') {
      img = {
        src: require('../../assets/languages/urdu.png')
      }
    } else if (imgName == 'uzbek') {
      img = {
        src: require('../../assets/languages/uzbek.png')
      }
    } else if (imgName == 'vietnamese') {
      img = {
        src: require('../../assets/languages/vietnamese.png')
      }
    } else if (imgName == 'yoruba') {
      img = {
        src: require('../../assets/languages/yoruba.png')
      }
    } else if (imgName == 'zulu') {
      img = {
        src: require('../../assets/languages/zulu.png')
      }
    }
    return img.src
  }

  const setNewValues=async(selectedLanguage)=>{
    AsyncStorage.getItem( 'userData' )
    .then( data => {
      data = JSON.parse( data );
      data.language=selectedLanguage;
      // console.log( 'after language data is',data );
      AsyncStorage.setItem( 'userData', JSON.stringify( data ) );
      navigation.navigate('MainMenuScreen')
    }).done();

      // var retrieveData = await AsyncStorage.getItem('userData') 
      // console.log('retrieveData is = ',retrieveData)
      // retrieveData.language=selectedLanguage
      // await AsyncStorage.setItem('userData',retrieveData)  
      // const retrieveData1 = await AsyncStorage.getItem('userData') 
      // console.log('retrieveData1 is = ',retrieveData1)
    }

  useEffect(()=>{
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.image} source={require("../../assets/icons/languages-icon.png")} />
        <Text style={styles.TitleText}>Languages</Text>
        <Image style={styles.image} source={render_image} />
      </View>
      {loading ?
        (<View>
          <ActivityIndicator size="large" />
        </View>) :
        (
          <View style={styles.flatList}>

            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={
                ({ item }) =>
                  <TouchableOpacity style={styles.flatliststyle}
                    onPress={() => {
                      // console.log('Image Named', item)
                      global.language = render_image(item.imgName)
                      // console.log('global.language is = =',global.language)
                      setNewValues(render_image(item.imgName))
                      }
                    }
                  >
                    <Image style={styles.rowimage} source={render_image(item.imgName)} />
                    <Text style={styles.LangaugeText}>{item.languageId}</Text>
                  </TouchableOpacity>
              }
            // keyExtractor={item=>item.key}   {render_txt(item)}
            />
          </View>
        )
      }
    </View>
  );
};
