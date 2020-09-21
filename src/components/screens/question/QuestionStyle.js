import { StyleSheet, Platform } from 'react-native'

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2c351',
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        textAlign: 'center',
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize: Platform.ios === 'ios' ? 25 : 30
    },
    PLayerName: {
        textAlign: 'center',
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize: Platform.ios === 'ios' ? 50 : 40,
        paddingTop: 10,
    },
    QuestionAndAnswer: {
        flex: 1,
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'steelblue',
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius:5,
        borderWidth: 2,
        borderColor: '#FFF'
    },
    buttonQuestion: {
        paddingRight: 15,
        paddingLeft: 15,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textQuestion: {
        textAlign: 'center',
        color: '#000',
        fontFamily: 'ConcertOne-Regular',
        fontSize: 20,
    },
    flex: {
        flex: 1,
        alignItems: 'center',
    },
    flexStart: {
        flex: 0.5,
        alignItems: 'center',
    },
    nbdrinking: {
        color: '#000',
        fontFamily: 'BalsamiqSans-Bold',
        fontSize: Platform.ios === 'ios' ? 60 : 45,
    },
    logo: {
        width:120,
        height:120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    EndGame: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    BackMenu: {
        color: '#FFF',
        fontFamily: 'BalsamiqSans-Bold',
        fontSize:30
    }
})