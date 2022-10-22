import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        flex: 1,
    },
    ImageBackground: {
        flex: 1
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
    topView: {
        flex: 0.20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    middleView: {
        flex: 0.60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomView: {
        flex: 0.20,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    Languageimage: {
        height: 60,
        width: 60,
        resizeMode: 'contain',
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 50,
    },
    TitleText: {
        paddingLeft: 20,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    LanguageText: {
        paddingLeft: 20,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "80%",
        height: 40,
        marginBottom: 20,
        alignItems: 'flex-start',
        shadowColor: 'black',
        shadowOpacity: 0.30,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        borderWidth: 0,
    },
    passwordButton: {
        borderRadius: 30,
        width: "100%",
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    passwordButtonText: {
        placeholder: '********',
        color: '#9E9E9E',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
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
        marginTop: 20,
        backgroundColor: "#e8bc44",
        shadowColor: 'black',
        shadowOpacity: 0.30,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 6 },
        borderWidth: 0,
    },
    HeadingText: {
        color: "white",
        fontWeight: "300",
        paddingBottom: 5,
        fontSize: 18,
    },
});

export default styles;