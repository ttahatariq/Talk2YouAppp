import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
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
import styles from "./SettingStyles";

export default function SettingScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // console.log('navigation useEffect is =')
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('navigation inner useEffect is =', global.password)
      setPassword(global.password)
    });
    return unsubscribe;
  }, [navigation]);

  const updateSettings = () => {
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
      axios.put(GLOBAL.BASE_URL + 'user', params
      ).then(function (response) {
        if (response.data.status) {
          console.log('we are testing axios', response.data);
          global.token = response.data.data
          setLoading(false)
          navigation.navigate('MainMenuScreen')
        } else {
          setLoading(false)
          // console.log('Error is response =', response);
          // console.log('Error is response.data =', response.data);
          Alert.alert(response.data.message)
          navigation.navigate('MainMenuScreen')
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
    else if (email.trim().length < 1) {
      Alert.alert('Email is Required')
    }
    else if (!validate(email)) {
      Alert.alert('email is not in correct format')
    }
    else if (fullname.trim().length < 1) {
      Alert.alert('Full Name is Required')
    }
    else if (phonenumber.trim().length < 1) {
      Alert.alert('Phone Number is Required')
    }
    else if (password.trim().length < 1) {
      Alert.alert('Password is required')
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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.scrollViewStyle}>
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
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image style={styles.image} source={require("../../assets/icons/settings-icon.png")} />
            <Text style={styles.TitleText}>Settings</Text>
          </View>


          <Text style={{ color: 'white', fontSize: 15, marginTop: 20 }}>Selected Language</Text>
          <View>

            {/* {global.language?
        ( 
        <View style={{flexDirection:'row', alignItems:'center', marginTop:10,marginBottom:10,}}>
          <Image style={styles.Languageimage} source={require("./assets/icons/Pakistan.png")} />
          <Text style={styles.LanguageText}>Ur</Text>
        </View>
        ):
        ( 
          <View style={{flexDirection:'row', alignItems:'center', marginTop:10,marginBottom:10,}}>
          <Image style={styles.Languageimage} source={require("./assets/icons/Pakistan.png")} />
          <Text style={styles.LanguageText}>Ur</Text>
          </View>
        )
      } */}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, }}>
              <Image style={styles.Languageimage} source={require("../../assets/icons/Pakistan.png")} />
              <Text style={styles.LanguageText}>Ur</Text>
            </View>

          </View>
        </View>

        <View style={styles.middleView}>
          <Text style={styles.HeadingText}>Username</Text>
          <View style={styles.inputView}>

            <TextInput
              style={styles.TextInput}
              placeholder="JohnSmith"
              onChangeText={(username) => setUsername(username)}
            />
          </View>
          <Text style={styles.HeadingText}>Email Address</Text>
          <View style={styles.inputView}>
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
              onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
            />
          </View>
          <Text style={styles.HeadingText}>Password</Text>
          <View style={styles.inputView}>
            <TouchableOpacity
              style={styles.passwordButton}
              onPress={() => navigation.navigate('ChangePasswordScreen')}
            ><Text style={styles.passwordButtonText}>********</Text></TouchableOpacity>

          </View>
        </View>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.SaveBtn}
            onPress={
              () => updateSettings()
              // navigation.navigate('MainMenuScreen')
            }
          >
            <Text style={styles.SaveText}
            >Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}