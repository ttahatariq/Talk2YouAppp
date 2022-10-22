import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    scrollViewContentContainer: {
        flexGrow: 1
    },
    scrollViewStyle: {
        flex: 1,
    },
    ImageBackground: {
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
    topView: {
        marginTop: 30,
        marginBottom: 40,
        flex: 0.10,
        justifyContent: 'flex-end'
    },
    topInnerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    middleView: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    bottomView: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30
    },
    image: {
        marginBottom: 20,
        height: 60,
        width: 60,
        resizeMode: 'contain',
        marginTop: 30,
    },
    TitleText: {
        paddingLeft: 20,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
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
    TextInput: {
        width: '95%',
        height: 50,
        flex: 1,
        marginLeft: 10,
        borderRadius: 30,
    },
    SaveText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
    SaveBtn: {
        width: "60%",
        borderRadius: 35,
        height: 70,
        justifyContent: "center",
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
        padding: 1,
        fontSize: 18,
    },
});

export default styles;