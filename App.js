import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

import rootNavigator from './src/navigator/rootNavigator'
require('./src/prototype.js')

const Navigation = createAppContainer(rootNavigator)

class App extends Component {
  render = () => {
    return (
      <Navigation />
    )
  }
}
export default App;
