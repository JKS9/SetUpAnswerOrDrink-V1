import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0E0E6',
        position: 'relative',
    },
    buttonBack: {
        width: Platform.OS === 'ios' ? 45 : 30,
        height: Platform.OS === 'ios' ? 45 : 30,
        justifyContent: 'center',
        bottom:0,
        left: 5,
    },
    buttonTuto: {
        position: 'absolute',
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
        justifyContent: 'center',
        top:3.5,
        right: 10,
    },
    containerTop: {

    },
    containerMeed: {  
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewName: {
        backgroundColor: '#f2c351',
        width:300,
        textAlign:'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius:5,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    textName: {
        textAlign:'center',
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize:35
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