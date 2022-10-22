
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    buttonsTitle: {
      flex: 0.40,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonsIcon: {
      flex: 0.30,
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    buttonFlag: {
      flex: 0.30,
      alignItems: 'flex-end',
      justifyContent: 'center'
    },
    ButtonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 18,
      alignSelf: 'center',
    },
    ButtonStyle: {
      flexDirection: 'row',
      width: "70%",
      borderRadius: 35,
      height: 70,
      marginTop: 40,
      backgroundColor: "#e8bc44",
      padding: 10,
      shadowColor: 'black',
      shadowOpacity: 0.30,
      elevation: 10,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 6 },
      borderWidth: 0,
    },
    image: {
      margin: 5,
      height: 50,
      width: 50,
      resizeMode: 'contain',
    },
    imageFlag: {
      height: 55,
      width: 55,
      borderRadius: 50,
      borderColor: 'white',
      overflow: 'hidden',
      borderWidth: 4,
      resizeMode: 'contain'
    },
    ImageBackground: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      resizeMode: 'center'
    },
  });

  export default styles;