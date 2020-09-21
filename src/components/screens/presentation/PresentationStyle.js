import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0E0E6',
        position: 'relative',
    },
    constainerTop: {

    },
    containerMe: {
        flex:1,
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
    textInfoThanks: {
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize:25,
        textAlign:'center',
        marginTop: 20,
    },
    textInfoString: {
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize:16
    },
    containerInfoSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockSocial: {
        width: 50,
        height: 50,
        margin: 10
    },
    imageSociale: {
        width:50,
        height:50,
        borderRadius:15,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#FFF'
    }
})