
import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const GLOBAL = require('../Helper/Globals');
import axios from "axios";
import styles from './RegistrationStyles'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistrationScreen({ navigation }) {

  // Code for Custom Hooks
  // const {userName,
  //   passWord,
  //   confirmPassword,
  //   eMail,
  //   fullName,
  //   phoneNumber,
  //   isLoading,
  //   signUp } = RegisterHook();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullname, setFullname] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")
  const [loading, setLoading] = useState(false)

  const setAsyncValues=async(data)=>{
      var userData = {
        username:username,
        email:email,
        fullname:fullname,
        token:data.data,
        language:'',
      }
      await AsyncStorage.setItem('userData',JSON.stringify(userData)) 
      await AsyncStorage.setItem('register','true') 
}

  const signUp = () => {
    var params = {
      password: password,
      languageId: "en-US",
      couponCode: "",
      username: username,
      deviceToken: "",
      fullName: fullname,
      email: email,
      notificationApp: "lingmoimtab",
      phone: phonenumber
    }
    if (allValidations()) {
      setLoading(true)
      axios.post(GLOBAL.BASE_URL + 'user', params
      ).then(function (response) {
        if (response.data.status) {
          console.log('we are testing axios', response.data);
          global.token = response.data.data
          setAsyncValues(response.data)
          setLoading(false)
          navigation.navigate('MainMenuScreen')
        } else {
          setLoading(false)
          Alert.alert(response.data.message)
        }
      })
        .catch(function (error) {
          setLoading(false)
          console.log(error);
        })
    } else {
    }
  }

  const allValidations = () => {
    if (username.trim().length < 1) {
      Alert.alert('Username is Required')
    }
    else if (confirmpassword.trim().length < 1) {
      Alert.alert('Confirm Password is Required')
    }
    else if (email.trim().length < 1) {
      Alert.alert('Email is Required')
    }
    else if (fullname.trim().length < 1) {
      Alert.alert('Full Name is Required')
    }
    else if (phonenumber.trim().length < 1) {
      Alert.alert('Phone Number is Required')
    }
    else if (password != confirmpassword) {
      Alert.alert('Password should be same')
    }
    else if (!validate(email)) {
      Alert.alert('email is not in correct format')
    } else {
      return true
    }
  }

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true;
    }
  }

  return (

    <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewStyle}>
      <ImageBackground source={require("../../assets/backgroundpics/grey.png")}
        style={styles.ImageBackground}>

        {loading ?
          (
            <View style={styles.loaderOverlay}>
              <ActivityIndicator size="large" />
            </View>

          ) : (null)
        }

        <View style={styles.topView}>
          <View style={styles.topInnerView}>
            <Image style={styles.image} source={require("../../assets/icons/register-icon.png")} />
            <Text style={styles.TitleText}>Registration</Text>
          </View>
        </View>

        <View style={styles.middleView}>
          <Text style={styles.HeadingText}>User Name</Text>
          <View style={styles.inputView}>

            <TextInput
              style={styles.TextInput}
              placeholder="JohnSmith"
              onChangeText={(username) => setUsername(username)}
            />
          </View>
          <Text style={styles.HeadingText}>Password</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="*******"
              maxLength={16}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <Text style={styles.HeadingText}>Confirm Password</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="*******"
              maxLength={16}
              secureTextEntry={true}
              onChangeText={(confirmpassword) => setConfirmpassword(confirmpassword)}
            />
          </View>
          <Text style={styles.HeadingText}>Email Address</Text>
          <View style={styles.inputView} >
            <TextInput
              style={styles.TextInput}
              placeholder="John@Smith.com"
              secureTextEntry={false}
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <Text style={styles.HeadingText}>Full Name</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="John Smith"
              secureTextEntry={false}
              onChangeText={(fullname) => setFullname(fullname)}
            />
          </View>
          <Text style={styles.HeadingText}>Phone Number</Text>
          <View style={styles.inputView}>
            <TextInput

              style={styles.TextInput}
              placeholder="+1 042 0987654"
              keyboardType="numeric"
              secureTextEntry={false}
              onChangeText={(phonenumber) => setPhoneNumber(phonenumber)}
            />
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.SaveBtn}
            onPress={signUp}>
            <Text style={styles.SaveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
