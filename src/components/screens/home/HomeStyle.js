import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6'
    },
    containerMeed: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue'
    },
    containerFooter: {
        backgroundColor: 'steelblue',
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
    },
    logo: {
        width:120,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
    },    
    button: {
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        marginTop: 25,
        justifyContent: 'center'
    },
    title: {
        color:'#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize:30
    },
    titleMode: {
        color:'#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize:25
    },
    copyright: {
        color: '#fff',
        fontFamily: 'BalsamiqSans-Bold',
        fontSize:18,
    }
})