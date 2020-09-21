import { createStackNavigator } from 'react-navigation-stack'
import { fromBottom } from 'react-navigation-transitions';


import Home from '../components/screens/home/HomeView'
import SettingGame from '../components/screens/game/SettingGameView'
import Started from '../components/screens/started/StartedView'
import Question from '../components/screens/question/QuestionView'
import Presentation from '../components/screens/presentation/PresentationView'

const defaultStackConfig = {
    defaultNavigationOptions: {
        headerShown: false
    }
}

const screens = {
    Home,
    SettingGame,
    Started,
    Question,
    Presentation
}

export default createStackNavigator(screens, {...defaultStackConfig, initialRouteName: 'Home', transitionConfig: () => fromBottom(500)})