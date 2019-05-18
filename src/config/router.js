import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

//screens
import HomeScreen from '../Features/Home/index'
import LoginScreen from '../Features/Login'

const AppStack = createStackNavigator({
    Home : {
        screen: HomeScreen
    }
})

const AuthStack = createStackNavigator({
    Login : {
        screen: LoginScreen
    }
})

export default createAppContainer(createSwitchNavigator(
    {
        Auth:AuthStack,
        Home:AppStack
    },
    {
        initialRouteName:Home
    }
))