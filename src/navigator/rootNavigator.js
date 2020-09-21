import { createSwitchNavigator } from 'react-navigation'

import StackNavigator from './stackNavigator'

export default createSwitchNavigator(
    {
        StackNavigator
    },
    {
        initialRouteName: 'StackNavigator'
    }
)