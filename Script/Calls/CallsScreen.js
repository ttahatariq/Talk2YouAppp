import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

const GLOBAL = require('../Helper/Globals');
import getApiHook from '../ApiHooks/GetApiHook'
import styles from "./CallsStyles";

export default function CallsScreen({ navigation }) {

  const url = GLOBAL.BASE_URL + 'contacts'
  const { data, loading, error } = getApiHook(url);

  const [calls, setCalls] = useState([
    { key: 0, title: 'John Smith' },
    { key: 1, title: 'Lynda jackson' },
    { key: 2, title: 'Adam Mark' },
    { key: 3, title: 'David' },
    { key: 4, title: 'Bill' },
    { key: 5, title: 'Rose' },
    { key: 6, title: 'Tony' },
  ])

  useEffect(() => {
    // getCalls()
    // console.log('API call',data)
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={require("../../assets/backgroundpics/grey.png")}
      >
        <View style={styles.topView}>
          <Image style={styles.image} source={require("../../assets/icons/calls-icon.png")} />
          <Text style={styles.TitleText}>Calls</Text>
        </View>

        <View style={styles.centerView}>
          <FlatList style={styles.flatList}
            showsVerticalScrollIndicator={false}
            data={calls}
            renderItem={
              ({ item }) => (
                <TouchableOpacity style={styles.flatliststyle}
                  onPress={() =>
                    // Alert.alert('Hello')
                    navigation.navigate('AudioScreen', {
                      userName: item.title,
                    })
                  }
                >
                  <Text style={styles.LangaugeText}>{item.title}</Text>
                </TouchableOpacity>
              )
            }
          // keyExtractor={item=>item.key}
          />
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.SaveBtn}
            onPress={() => navigation.navigate('StartNewCallScreen')}
          >
            <Image style={styles.Btnimage} source={require("../../assets/icons/make-call-icon.png")} />
            <Text style={styles.SaveText}>Start New Call</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}