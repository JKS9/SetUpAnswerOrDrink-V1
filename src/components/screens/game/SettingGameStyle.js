import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    homeContainer: {
        flex:1,
        backgroundColor: 'steelblue',
    },
    buttonBack: {
        width: Platform.OS === 'ios' ? 45 : 30,
        height: Platform.OS === 'ios' ? 45 : 30,
        justifyContent: 'center',
        bottom:0,
        left: 5,
    },
    homeContainerSetting: {
        flex:1
    },
    containerSliderUser: {
        alignItems: 'center'
    },
    textSLider: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        textAlign: 'center',
        fontWeight: "bold",
        color:'#fff',
        fontFamily: 'ConcertOne-Regular'
    },
    textError: {
        fontSize: Platform.OS === 'ios' ? 20 : 15,
        textAlign: 'center',
        fontWeight: "bold",
        color:'#FA8072',
        fontFamily: 'ConcertOne-Regular'
    },
    textnbSLider: {
        fontSize: Platform.OS === 'ios' ? 30 : 23,
        textAlign: 'center',
        color:'#fff',
        fontFamily: 'BalsamiqSans-Bold'
    },
    slider: {
        width: 275,
    },
    checkbox: {
        margin:3,
        padding: 10,
        fontFamily: 'ConcertOne-Regular'
    },
    ButtonStart: {
        borderRadius:5,
        borderWidth: 2,
        borderColor: '#FFF',
        backgroundColor: '#f2c351',
        marginLeft: 40,
        marginTop: Platform.OS === 'ios' ? 20 : 5,
        marginRight: 40,
        paddingTop: Platform.OS === 'ios' ? 10 : 8,
        paddingBottom: Platform.OS === 'ios' ? 10 : 8,
    },
    Start: {
        borderRadius:5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    StartText: {
        color:'#fff',
        fontFamily: 'BalsamiqSans-Bold',
        fontSize: 30,
        borderRadius:5,
        textAlign:'center',

    },
    containerCategory: {
        flexDirection: 'row',
        marginLeft:20,
        marginRight:20
    },
    itemCategory: {
        margin:5
    },
    containerMe: {
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerInfo: {
        backgroundColor: 'steelblue',
        marginLeft:20,
        marginRight:20,
        paddingTop: 20,
        paddingRight: 15,
        paddingBottom: 20,
        paddingLeft: 15,
        borderRadius:5,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    textInfo: {
        color: '#fff',
        fontFamily: 'ConcertOne-Regular',
        fontSize:16
    },
    textInfoString: {
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize:16
    },
    skipTuto: {
        position:'absolute',
        right: 11,
        top:-15,
        width:20,
        height:20,
    }
})