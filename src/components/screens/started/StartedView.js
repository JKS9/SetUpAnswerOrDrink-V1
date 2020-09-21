import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Image
} from 'react-native'
import { withMappedNavigationParams } from 'react-navigation-props-mapper'

import styles from './StartedStyle'
const NameBeauf = require('../../../asset/json/name.json')
const QuestionDisplay = require('../../../asset/json/question.json')

class StartedView extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      name: NameBeauf.mix().slice(0,props.nbPlayers),
      nb: 0,
      skip: true
    }
  }

  goToHome= () => {
    this.props.navigation.goBack()
  }

  updateStat= () => {
    const categories = []
    if ( this.props.isCheckedCulture === 1 ) {
      categories.push('Cultures')
    }
    if ( this.props.isCheckedSociete === 1 ) {
      categories.push('Société')
    } 
    if ( this.props.isCheckedNature === 1 ) {
      categories.push('Nature')
    } 
    if ( this.props.isCheckedPolitique === 1 ) {
      categories.push('Politiques')
    }
    
    if (this.state.nb < this.props.nbPlayers-1) {
      this.setState({
        nb: this.state.nb+1
      })
    } else {
      //...this.props (permet d'ajouter tous les props)
      const data = {
        name: this.state.name,
        nbPlayers: this.props.nbPlayers,
        valueLevel: this.props.valueLevel,
        nbQuestion: this.props.nbQuestion,
        nbDrinking: this.props.nbDrinking,
        questionFilter: QuestionDisplay.filter((item) => {
          if (item.niveau !== this.props.valueLevel) {
            return false
          }
          if (this.props.isCheckedAll === 1 ) {
            return true
          }
          if ( item.categorie.some(o => categories.includes(o))) {
            return true
          }
          return false
        }).map(({question, reponse, niveau, categorie}) => ({question, reponse, niveau, categorie})),
      };
      this.props.navigation.push('Question', data)
    }
  }

  skipTuto= () => {
    this.setState({
      skip: !this.state.skip
    })
  }
  
  renderskip = () => {
    return (<TouchableOpacity
      style={styles.containerMe}
      activeOpacity={1}
      onPress={
        this.skipTuto
      }
    >
      <View style={styles.containerInfo}>
        <Text style={styles.textInfoString}>ETAPE 1 :</Text>
        <Text style={styles.textInfo}><Text style={styles.textInfoString}>Distribution des pseudos</Text>, voici vos pseudos pour la partie.{"\n"}</Text>
        <Text style={styles.textInfo}>- Le QA distribue les pseudos dans le sens d'une aiguille d'une montre. Si une personne refuse son pseudo elle devra boire <Text style={styles.textInfoString}>3 gorgées</Text>, mais gardera quand même son pseudo{"\n"}</Text>
        <Text style={styles.textInfo}>- Clique sur le pseudo pour afficher le suivant.{"\n"}</Text>
        <Text style={styles.textInfoString }>sorter du tuto pour voir les pseudos</Text>
      </View>
    </TouchableOpacity>
    )
  }

  render = () => {
    const {nbPlayers, valueLevel, isCheckedPolitique, isCheckedNature, isCheckedSociete, isCheckedCulture, isCheckedAll} = this.props;

      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerTop}>
              <TouchableOpacity
                style={styles.buttonBack}
                activeOpacity={1}
                onPress={
                  this.goToHome
                }
              >
                <Image style={styles.buttonBack} source={require('./../../../asset/images/icones/back.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.containerMeed}>
              <View style={styles.viewName}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={
                    this.updateStat
                  }
                >
                  <Text style={styles.textName}>{this.state.name[this.state.nb]}</Text>
                </TouchableOpacity>
              </View>
              {this.state.skip ? this.renderskip() : null}
            </View>
        </SafeAreaView>
      )
    }
}

export default withMappedNavigationParams()(StartedView);