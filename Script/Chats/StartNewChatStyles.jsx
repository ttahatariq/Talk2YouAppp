import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0060f7",
    },
    topView:{
      flex:0.10,
      flexDirection:'row', 
      alignItems:'center', 
      justifyContent:'center',
      marginTop:40
    },
    centerView: {
      flex:0.15,
      flexDirection:'row',
      alignSelf:'center',
      width: "90%",
      height: 45,
      alignItems:'center',
    },
    centerViewClone: {
      flex:1.0,
      flexDirection:'row',
      backgroundColor: "white",
      borderRadius: 30,
      width: "90%",
      alignItems: 'center',
      justifyContent:'center',
      height:50,
    },
    centerInputView:{
      flex:0.80, 
      alignItems:'center', 
      justifyContent:'center',
    },
    centerImageView:{
      flex:0.20, 
      alignItems:'center', 
      justifyContent:'center',
    },
    flatliststyle : {
      marginBottom:10,
      color:'white'
    },
    langaugeText:{
      color:'white', 
      fontSize:18
    },
    extraView: {
      flex:0.75,
      padding:30,
      alignItems: 'flex-start',
      justifyContent:'flex-start',
    },
    titleImage: {
      height:40,
      width: 40,
      resizeMode:'center',
    },
    textImage: {
      height:40,
      width: 40,
      resizeMode:'contain',
    },
    TitleText:{
      paddingLeft:20,
      color:'white',
      fontSize:25,
      fontWeight:'bold',
      marginTop:10,
    },
    textInput: {
      height: 50,
      padding: 10,
      marginLeft: 20,
      resizeMode:'contain'
    },
    SaveText:{
      fontWeight:'bold',
      color:'white',
      fontSize:18,
    },
    SaveBtn: {
      width: "50%",
      borderRadius: 35,
      height: 70,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#e8bc44",
    },
    HeadingText:{
      color:"white",
      fontWeight:"300",
      padding:1,
      fontSize:18,
    },
  });

  export default styles;