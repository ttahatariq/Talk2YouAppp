
import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderOverlay: {
        width: width,
        height: height,
        backgroundColor: 'clear',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20
    },
    image: {
        marginBottom: 30,
        height: 75,
        width: 75,
        resizeMode: 'contain'
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: 'flex-start',
        shadowColor: 'black',
        shadowOpacity: 0.30,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        borderWidth: 0,
    },
    TextInput: {
        height: 50,
        width: '93%',
        borderRadius: 30,
        flex: 1,
        marginLeft: 20,
    },
    loginText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    loginBtn: {
        width: "60%",
        borderRadius: 35,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
        backgroundColor: "#e8bc44",
        shadowColor: 'black',
        shadowOpacity: 0.30,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        borderWidth: 0,
    },
    ImageBackground: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;