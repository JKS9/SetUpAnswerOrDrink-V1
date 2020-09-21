import React from 'react'
import { Alert, View, BackHandler } from 'react-native'

const AlertWarning = () => {
   return (
         <View>{
            Alert.alert(
               'Attention',
               "L'abus d'alcool est dangereux pour la santé. En poursuivant vous confirmez être responsable des éventuelles conséquences que pourrait engendrer l'utilisation de 'SetUp Answer or Drink'",
               [
                 {
                   text: 'Fermer',
                   onPress: () => BackHandler.exitApp(),
                   style: 'Fermer'
                 },
                 { text: 'OK', onPress: () => console.log('accepted') }
               ],
               { cancelable: false }
             )
         }</View>
   )
}
export default AlertWarning