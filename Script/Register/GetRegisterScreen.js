import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import styles from './GetRegisterStyles'

export default function GetRegisterScreen({ navigation }) {
  return (
  <View style={styles.container}>
    <ImageBackground source={require("../../assets/backgroundpics/greywhite.png")}
      style={styles.ImageBackground}>
      <Image style={styles.image} source={require("../../assets/icons/register-icon.png")} />
      <TouchableOpacity style={styles.RegisterBtn}
        onPress={() => navigation.navigate('RegistrationScreen')}
      // onPress={()=>navigation.navigate('MainMenuScreen')}
      >
        <Text style={styles.RegisterText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  );
}
  
  
  