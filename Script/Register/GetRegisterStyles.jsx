import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ImageBackground: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 20,
      height: 75,
      width: 75,
      resizeMode: 'contain'
    },
    RegisterText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 20,
    },
    RegisterBtn: {
      width: "60%",
      borderRadius: 35,
      height: 70,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e8bc44",
      shadowColor: 'black',
      shadowOpacity: 0.30,
      elevation: 10,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 6 },
      borderWidth: 0,
    },
  });

  export default styles;