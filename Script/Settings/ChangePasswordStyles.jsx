
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0060f7",
    },
    topView: {
      flex: 0.20,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    middleView: {
      flex: 0.60,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    bottomView: {
      flex: 0.20,
      alignItems: 'center',
      justifyContent: "center"
    },
    image: {
      marginBottom: 20,
      height: 70,
      width: 70,
      resizeMode: 'contain',
    },
    TitleText: {
      paddingLeft: 10,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 20,
    },
    inputView: {
      backgroundColor: "white",
      borderRadius: 30,
      width: "80%",
      height: 40,
      marginBottom: 30,
      alignItems: 'flex-start',
    },
    TextInput: {
      height: 40,
      width: '97%',
      marginLeft: 10,
      borderRadius: 30,
    },
    SaveText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 20,
    },
    SaveBtn: {
      width: "60%",
      borderRadius: 35,
      height: 70,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e8bc44",
    },
    HeadingText: {
      color: "white",
      fontWeight: "300",
      padding: 1,
      fontSize: 18,
    },
  });

  export default styles;