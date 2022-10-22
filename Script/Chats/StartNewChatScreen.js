import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
  
  import styles from "./StartNewChatStyles";

  export default function StartNewChatScreen({navigation}){
  const [users, setUsers] = useState([
    {key:0, title:'John Smith'},
    {key:1, title:'Lynda jackson'},
    {key:2, title:'Adam Mark'},
    {key:3, title:'David'},
    {key:4, title:'Bill'},
    {key:5, title:'Rose'},
    {key:6, title:'Tony'},
])

  useEffect(()=>{
    console.log('Start New Chat Screen')
  })
  return (
    <View style={styles.container}>
    {/* <ScrollView style={styles.scrollViewContainer}> */}
    
    <View style={styles.topView}>
    <Image style={styles.titleImage} source={require("../../assets/icons/make-call-icon.png")} />
        <Text style={styles.TitleText}>Start New Chat</Text>
    </View>
 
      {/* <StatusBar style="auto" /> */}
      
  <View style={styles.centerView}>
    <View style={styles.centerViewClone}>
    <View style={styles.centerInputView}>
      {/* <Text>Hello</Text> */}
        <TextInput style={{ width:'98%',height:50, borderRadius:30, padding:10}}
          // onChangeText={(Username) => setUsername(Username)}
        />
    </View>
    <View style={styles.centerImageView}>
      
    {/* <Text>Hello 2</Text> */}

        <Image style={styles.textImage} source={require("../../assets/icons/search-icon.png")} />
        </View>
      </View>
    </View>
      
    {/* </ScrollView> */}

      <View style={styles.extraView}>
      <FlatList 
              showsVerticalScrollIndicator={false}
              data={users}
              renderItem={
                  ({item}) => (
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
