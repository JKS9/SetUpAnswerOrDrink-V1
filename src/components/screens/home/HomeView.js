import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert
} from 'react-native'

import AlertWarning from '../../alertComponent/AlertWarningView'

import styles from './HomeStyle'

class HomeView extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'SetUp',
      littleTilte: '"Answer or drink"'
    }
  }

  goToSettingGame = () => {
    this.props.navigation.push('SettingGame')
  }

  goToPresentation = () => {
    this.props.navigation.push('Presentation')
  }

  render = () => {
      return (
        
        <View style={styles.container}>
          <AlertWarning />
          <View style={styles.containerMeed}>
            <Text style={styles.title}>{ this.state.title }</Text>
            <Text style={styles.titleMode}>{ this.state.littleTilte }</Text>
            <TouchableOpacity
            style={[styles.button, {transform: [{ rotate: "-2.5deg" }]}]}
            activeOpacity={1}
            onPress={
              this.goToSettingGame
            }
            >
              <Image style={styles.logo} source={require('./../../../asset/images/logo/beer.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerFooter}>
          <TouchableOpacity
             style={styles.text}
             activeOpacity={1}
            onPress={
              this.goToPresentation
            }
            >
              <Text style={styles.copyright}>By Etienne Juzans</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

export default HomeView;