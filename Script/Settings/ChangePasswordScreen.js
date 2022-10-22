import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

import styles from "./ChangePasswordStyles";

export default function ChangePasswordScreen({ navigation }) {

  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");

  const changePassword = async () => {

    if (CurrentPassword.trim().length < 1) {
      Alert.alert('Current Password is Required')
    }
    else if (NewPassword.trim().length < 1) {
      Alert.alert('New Password is Required')
    }
    else if (ConfirmNewPassword.trim().length < 1) {
      Alert.alert('Confirm New Password is Required')
    }
    else if (NewPassword != ConfirmNewPassword) {
      Alert.alert('Password should be same')
    } else {
      // Alert.alert('SettingScreen')
      console.log(NewPassword)
      global.password = NewPassword
      console.log(NewPassword)
      navigation.navigate('SettingScreen')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.image} source={require("../../assets/icons/settings-icon.png")} />
          <Text style={styles.TitleText}>Change Password</Text>
        </View>
      </View>

      <View style={styles.middleView}>
        <Text style={styles.HeadingText}>Current Password</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInput}
            placeholder="*******"
            maxLength={16}
            secureTextEntry={true}
            onChangeText={(CurrentPassword) => setCurrentPassword(CurrentPassword)}
          />
        </View>
        <Text style={styles.HeadingText}>New Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="*******"
            maxLength={16}
            secureTextEntry={true}
            onChangeText={(NewPassword) => setNewPassword(NewPassword)}
          />
        </View>
        <Text style={styles.HeadingText}>Confirm New Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="*******"
            maxLength={16}
            secureTextEntry={true}
            onChangeText={(ConfirmNewPassword) => setConfirmNewPassword(ConfirmNewPassword)}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.SaveBtn}
          onPress={
            () => changePassword()
          }
        >
          <Text style={styles.SaveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
