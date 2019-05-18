import React,{PureComponents} from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import color from '../config/color';

class AppBar extends PureComponents{
    render(){
        return(
            <View style={styles.container}></View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:'56',
        backgroundColor:color.pink_theme.primary
    }
})

export default AppBar