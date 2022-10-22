import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Alert, ActivityIndicator } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
const GLOBAL = require('../Helper/Globals');
import styles from "./LoginStyles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  // const validate = (text) => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   if (reg.test(text) === false) {
  //     console.log("Email is Not Correct");
  //     // this.setState({ email: text })
  //     return false;
  //   }
  //   else {
  //     // this.setState({ email: text })
  //     // console.log("Email is Correct")
  //     return true;
  //   }
  // }

  const signIn = async () => {
    if (email.trim().length < 1) {
      Alert.alert('Username is Required')
    } else if (password.trim().length < 1) {
      Alert.alert('Password is Required')
    }
    // else if(!validate(email)){
    //   Alert.alert('email is not in correct format')
    // } 
    else {
      setLoading(true)
      var params = {
        password: password,
        username: email,
        deviceToken: "",
        notificationApp: "lingmoimtab",
      }
      console.log('Params are =', params)

      axios.post(GLOBAL.BASE_URL + 'login', params
      ).then(function (response) {
        if (response.data.status) {
          console.log('we are testing axios', response.data);
          global.token = response.data.data
          setLoading(false)
          navigation.navigate('MainMenuScreen')
          // return true
        } else {
          Alert.alert(response.data.message)
        }
      })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  return (

    <View style={styles.container}>

      <ImageBackground source={require("../../assets/backgroundpics/greywhite.png")}
        style={styles.ImageBackground}>

        {loading ?
          (
            <View style={styles.loaderOverlay}>
              <ActivityIndicator size="large" />
            </View>

          ) : (null)
        }
        <Image style={styles.image} source={require("../../assets/icons/login-icon.png")} />


        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            maxLength={16}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}
          onPress={() => signIn()}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>

  );
}