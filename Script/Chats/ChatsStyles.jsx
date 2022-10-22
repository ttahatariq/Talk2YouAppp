import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    imageBackground: {
      flex: 1,
      backgroundColor: "blue",
      alignItems: "center",
    },
    topView: {
      flexDirection: 'row',
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    centerView: {
      flex: 0.70,
      backgroundColor: 'white',
      width: '85%',
      borderRadius: 20,
      shadowColor: 'black',
      shadowOpacity: 0.30,
      elevation: 10,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 6 },
      borderWidth: 0,
    },
    bottomView: {  
      flex: 0.15,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
    image: {
      height: 60,
      width: 60,
      resizeMode: 'contain',  
    },
    TitleText: {
      alignContent: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 35,
    },
    ChatsView: {
    },
    SaveText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 20,
      padding: 10,
    },
    SaveBtn: {
      width: "60%",
      borderRadius: 35,
      height: 70,
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      //marginTop: 20,
      backgroundColor: "#e8bc44",
      flexDirection: "row",
      shadowColor: 'black',
      shadowOpacity: 0.30,
      elevation: 10,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 6 },
      borderWidth: 0,
    },
    Btnimage: {
      height: 45,
      width: 45,
    },
    LangaugeText: {
      padding: 10,
      color: 'gray',
      fontSize: 18,
    },
  });

  export default styles;