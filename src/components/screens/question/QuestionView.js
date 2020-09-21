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

import styles from './QuestionStyle'

class QuestionView extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      question: props.questionFilter.mix().slice(0,props.nbQuestion),
      nb: 0,
      round: 1,
      name: this.multiName(),
      nbname: 0
    }
  }

  multiName= () => {
    const nbNames = this.props.name.length
    const nbQuestion = this.props.nbQuestion

    let calcule = Math.ceil(nbQuestion / nbNames)
    const newName = []
    for (let i = 0; i < calcule; i++) {
      newName.push(...this.props.name)
    }
    
    return newName
  }

  goToHome= () => {
    this.props.navigation.push('Home')
  }

  newQuestionOrAnswer= () => {
    if (this.state.round === 1) {
      this.setState({
        round: this.state.round +1
      })
    } else if (this.state.round === 2) {
      // à la place du 6, remettre le nombre de question séléctionner dans la partie
      if (this.state.nb+1 < this.props.nbQuestion -1) {
        nbNamearray = this.state.name.length - 1
        this.setState({
          nbname: this.state.nbname >= nbNamearray ? this.state.nbname - 1 : this.state.nbname + 1 ,
          round: this.state.round - 1,
          nb: this.state.nb + 1
        })
      } else {
        this.setState({
          round: this.state.round+1,
        })
      }
    } else {
      return null
    }
  }
  
  render = () => {
    const {nbPlayers, nbQuestion, nbDrinking, valueLevel, questionFilter} = this.props;
    const BackMenu = <TouchableOpacity
    style={styles.EndGame}
    onPress={
      this.goToHome
    }
    activeOpacity={1}
    >
      <Text style={styles.BackMenu}>retour au Menu</Text>
    </TouchableOpacity>;
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.flexStart}>

          </View>
          
          <View style={styles.title}>
            {this.state.round < 3 ? <Text style={styles.textTitle}>{this.state.round === 1 ? 'Question' : 'Answer'}</Text> : null}
            {this.state.round < 3 ? <Text style={styles.textTitle}>pour</Text> : null}
            {this.state.round < 3 ? <Text style={styles.PLayerName}>{this.state.name[this.state.nbname]}</Text> : null}
            {this.state.round === 3 ? <Text style={styles.textTitle}>fin de la partie</Text> : null }
          </View>

          <View style={styles.flexStart}>
          </View>
          <TouchableOpacity
              style={styles.QuestionAndAnswer}
              onPress={
                this.newQuestionOrAnswer
              }
              activeOpacity={1}
              disabled={this.state.round === 3 ? true : false}
            >
              <View style={styles.buttonQuestion}>
                
                {this.state.round === 1 ? <Text style={styles.textQuestion}>{this.state.question[this.state.nb].question}</Text> : false }
                {this.state.round === 2 ? <Text style={styles.textQuestion}>{this.state.question[this.state.nb].reponse}</Text> : false }
                {this.state.round === 3 ? BackMenu : false }
              </View>
            </TouchableOpacity>

          {Platform.OS === 'ios' ? <View style={styles.flex}>
          </View> : null }

            {this.state.round < 3 ? <Text style={styles.nbdrinking}>"{this.props.nbDrinking}"{this.state.name[this.state.nbname] === "Zemmour" ? <Text>+2</Text> : null }</Text> : null}

          <View style={[styles.flex, {transform: [{ rotate: "-2.5deg" }], paddingTop: Platform.OS === 'ios' ? 0 : 20 }]}>
            <Image style={styles.logo} source={require('./../../../asset/images/logo/beer.png')} />
          </View>
        </SafeAreaView>
      )
    }
}

export default withMappedNavigationParams()(QuestionView);