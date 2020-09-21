import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'
import Slider from 'react-native-slider'
import { SafeAreaView } from 'react-navigation'

import styles from './SettingGameStyle'

class SettingGameView extends Component{
  state = {
    value: 4,
    nbQuestion: 30,
    valueNb: 1,
    valueLevel: 'easy',
    nbDrinking:2,
    isCheckedPolitique: false,
    isCheckedNature: false,
    isCheckedSociete: false,
    isCheckedCulture: false,
    isCheckedAll: false,
    error : false
  }

  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value)
      };
    });
  }

  changeNbQuestion(value) {
    this.setState(() => {
      return {
        nbQuestion: parseFloat(value)
      };
    });
  }

  changeNbDrinking(value) {
    this.setState(() => {
      return {
        nbDrinking: parseFloat(value)
      };
    });
  }

  changeLevel(value) {
    let level;
    switch (value) {
      case 1:
        level = 'easy';
      break;
      case 2:
        level = 'medium';
      break;
      case 3:
        level = 'hard';
      break;
      default:
    break;
    }
    this.setState({valueLevel: level})
  }

  goToHome= () => {
    this.props.navigation.goBack()
  }

  StartGame= () => {
    if ( this.state.isCheckedPolitique != true && this.state.isCheckedNature != true && this.state.isCheckedSociete != true && this.state.isCheckedCulture != true && this.state.isCheckedAll != true ) {
      this.setState({
        error: true
      }) 
      return true
    }
    
    const data = {
      nbPlayers: this.state.value,
      valueLevel: this.state.valueLevel,
      nbQuestion: this.state.nbQuestion,
      nbDrinking: this.state.nbDrinking,
      isCheckedPolitique: this.state.isCheckedPolitique === true ? 1 : 0,
      isCheckedNature: this.state.isCheckedNature === true ? 1 : 0,
      isCheckedSociete: this.state.isCheckedSociete === true ? 1 : 0,
      isCheckedCulture: this.state.isCheckedCulture === true ? 1 : 0,
      isCheckedAll: this.state.isCheckedAll === true ? 1 : 0,
    };
    this.props.navigation.push('Started', data)
  }

  render = () => {
      const { value, valueNb, nbQuestion, nbDrinking } = this.state;
      return (
        <SafeAreaView style={styles.homeContainer}>
          <View style={styles.buttonBack} >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.buttonBack}
                onPress={
                  this.goToHome
                }
              >
                <Image style={styles.buttonBack} source={require('./../../../asset/images/icones/back.png')} />
              </TouchableOpacity>
          </View>
          <View style={styles.homeContainerSetting} >
            <View style={styles.containerSliderUser}>
                <Text style={styles.textSLider}>Level</Text>
                <Text style={styles.textnbSLider}>{this.state.valueLevel}</Text>
                <Slider
                  style={styles.slider}
                  step={1}
                  minimumValue={1}
                  maximumValue={3}
                  thumbTintColor='#f2c351'
                  maximumTrackTintColor='#fff'
                  minimumTrackTintColor="#f2c351"
                  onValueChange={value => this.changeLevel(value)}
                  value={valueNb}
                />
            </View>
            <View style={styles.containerSliderUser}>
              <Text style={styles.textSLider}>Nombre de joueurs</Text>
              <Text style={styles.textnbSLider}>{String(value)}</Text>
              <Slider
                style={styles.slider}
                step={1}
                minimumValue={3}
                maximumValue={15}
                thumbTintColor='#f2c351'
                maximumTrackTintColor='#fff'
                minimumTrackTintColor="#f2c351"
                onValueChange={value => this.change(value)}
                value={value}
              />
            </View>
            <View style={styles.containerSliderUser}>
              <Text style={styles.textSLider}>Nombre de questions</Text>
              <Text style={styles.textnbSLider}>{this.state.nbQuestion}</Text>
              <Slider
                style={styles.slider}
                step={10}
                minimumValue={20}
                maximumValue={50}
                thumbTintColor='#f2c351'
                maximumTrackTintColor='#fff'
                minimumTrackTintColor="#f2c351"
                onValueChange={value => this.changeNbQuestion(value)}
                value={nbQuestion}
              />
            </View>
            <View style={styles.containerSliderUser}>
              <Text style={styles.textSLider}>Nombre de gorgées</Text>
              <Text style={styles.textnbSLider}>{this.state.nbDrinking}</Text>
              <Slider
                style={styles.slider}
                step={1}
                minimumValue={1}
                maximumValue={8}
                thumbTintColor='#f2c351'
                maximumTrackTintColor='#fff'
                minimumTrackTintColor="#f2c351"
                onValueChange={value => this.changeNbDrinking(value)}
                value={nbDrinking}
              />
            </View>
            {this.state.error === true ? <Text style={styles.textError}>séléctionne une catégorie</Text> : <Text style={styles.textSLider}>Catégories</Text>}
            <View style={styles.containerCategory}>
              <View style={styles.itemCategory}>
                <TouchableOpacity
                  style={{backgroundColor:this.state.isCheckedAll === true ? '#B0E0E6': '#fff',borderRadius:5,borderWidth: 2,borderColor: '#FFF'}}
                  onPress={()=>{
                    this.setState({
                      isCheckedAll:!this.state.isCheckedAll
                    })
                  }}
                  activeOpacity={1}
                >
                  <Text style={styles.checkbox}>Toute Catégorie</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemCategory}>
                <TouchableOpacity
                  style={{backgroundColor:this.state.isCheckedAll === true ? '#B0E0E6': this.state.isCheckedPolitique === true ? '#B0E0E6': '#fff',borderRadius:5,borderWidth: 2,borderColor: '#FFF'}}
                  onPress={()=>{
                    if(this.state.isCheckedAll === false) {
                      this.setState({
                        isCheckedPolitique:!this.state.isCheckedPolitique
                      })
                    }
                  }}
                  activeOpacity={1}
                >
                  <Text style={styles.checkbox}>Politiques</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemCategory}>
                <TouchableOpacity
                  style={{backgroundColor:this.state.isCheckedAll === true ? '#B0E0E6': this.state.isCheckedNature === true ? '#B0E0E6': '#fff',borderRadius:5,borderWidth: 2,borderColor: '#FFF'}}
                  onPress={()=>{
                    if(this.state.isCheckedAll === false) {
                      this.setState({
                        isCheckedNature:!this.state.isCheckedNature
                      })
                    }
                  }}
                  activeOpacity={1}
                >
                  <Text style={styles.checkbox}>Nature</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerCategory}>
              <View style={styles.itemCategory}>
                <TouchableOpacity
                  style={{backgroundColor:this.state.isCheckedAll === true ? '#B0E0E6': this.state.isCheckedSociete === true ? '#B0E0E6': '#fff',borderRadius:5,borderWidth: 2,borderColor: '#FFF'}}
                  onPress={()=>{
                    if(this.state.isCheckedAll === false) {
                      this.setState({
                        isCheckedSociete:!this.state.isCheckedSociete
                      })
                    }
                  }}
                  activeOpacity={1}
                >
                  <Text style={styles.checkbox}>Société</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.itemCategory}>
                <TouchableOpacity
                  style={{backgroundColor:this.state.isCheckedAll === true ? '#B0E0E6': this.state.isCheckedCulture === true ? '#B0E0E6': '#fff',borderRadius:5,borderWidth: 2,borderColor: '#FFF'}}
                  onPress={()=>{
                    if(this.state.isCheckedAll === false) {
                      this.setState({
                        isCheckedCulture:!this.state.isCheckedCulture
                      })
                    }
                  }}
                  activeOpacity={1}
                >
                  <Text style={styles.checkbox}>Cultures</Text>
                </TouchableOpacity>
              </View>
            </View>
            
              <TouchableOpacity
                style={styles.ButtonStart}
                onPress={
                  this.StartGame
                }
                activeOpacity={1}
              >
                <View style={styles.Start}>
                  <Text style={styles.StartText}>START</Text>
                </View>
              </TouchableOpacity>
          </View>          
        </SafeAreaView>
      )
    }
}

export default SettingGameView;