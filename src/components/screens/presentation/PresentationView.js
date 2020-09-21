import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Linking
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import styles from './PresentationStyle'

class PresentationView extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'SetUp'
    }
  }

  goToHome= () => {
    this.props.navigation.goBack()
  }

  render = () => {
      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerMe}>
              <View style={styles.containerInfo}>
                <Text style={styles.textInfo}>Je m'appelle <Text style={styles.textInfoString}>Etienne Juzans</Text>, je suis développeur <Text style={styles.textInfoString}>Full stack Javascript Web/Mobile</Text>{"\n"}</Text>
                <Text style={styles.textInfo}><Text style={styles.textInfoString}>SetUp : Answer or Drink, </Text>est un projet personnel réalisé exclusivement en <Text style={styles.textInfoString}>'React-Native'</Text>{"\n"}</Text>
                <Text style={styles.textInfo}>Cela ma fait gagner en compétencce sur cette même technologie.</Text>
              </View>
              <TouchableOpacity
                onPress={
                  this.goToHome
                }
                activeOpacity={1}
              >
                <Text style={styles.textInfoThanks}>Merci</Text>
              </TouchableOpacity>    
            </View>
            <View style={styles.containerInfoSocial}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://github.com/JKS9')}
                activeOpacity={1}
              >
                <View style={styles.blockSocial}>
                  <Image style={styles.imageSociale} source={require('./../../../asset/images/icones/github.png')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://www.linkedin.com/in/etienne-juzans/')}
                activeOpacity={1}
              >
                <View style={styles.blockSocial}>
                  <Image style={styles.imageSociale} source={require('./../../../asset/images/icones/linkedin.png')} />
                </View>
              </TouchableOpacity>
            </View>
            
        </SafeAreaView>
      )
    }
}

export default PresentationView;