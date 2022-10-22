import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

import styles from "./StartNewCallStyles";

export default function StartNewCallScreen({ navigation }) {
  const [Username, setUsername] = useState("");
  const ChatsRecord = [
    { key: 0, title: 'John Smith' },
    { key: 1, title: 'Lynda jackson' },
    { key: 2, title: 'Adam Mark' },
    { key: 3, title: 'David' },
    { key: 4, title: 'Bill' },
    { key: 5, title: 'Rose' },
    { key: 6, title: 'Tony' },
    { key: 7, title: 'Tony B' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.titleImage} source={require("../../assets/icons/make-call-icon.png")} />
        <Text style={styles.TitleText}>Start New Call</Text>
      </View>

      <View style={styles.centerView}>
        <View style={styles.centerViewClone}>
          <View style={styles.centerInputView}>
            <TextInput style={styles.textInputStyle}
            // onChangeText={(Username) => setUsername(Username)}
            />
          </View>
          <View style={styles.centerImageView}>
            <Image style={styles.textImage} source={require("../../assets/icons/search-icon.png")} />
          </View>
        </View>
      </View>
      <View style={styles.extraView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={ChatsRecord}
          renderItem={
            ({ item }) => (
              <TouchableOpacity style={styles.flatliststyle}>
                <Text style={styles.langaugeText}>{item.title}</Text>
              </TouchableOpacity>
            )
          }
        // keyExtractor={item=>item.key}
        />
      </View>
    </View>
  );
}
