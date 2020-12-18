import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
const SplashScreen =({navigation})=> {
        return (
            <View style= {styles.container}>
            <Status Bar backgroundColor='#009387' barStyle="light-content"/> 
            <View style = {styles.header}>
            <Animatable.Image
            animation="bouncein"
            duration="1500"
            source={require('../assets/logo.png')}
            style = {styles.logo}
            />
            </View>
            <View style= {styles.footer}>
            </View>
            </View>
        )
    }
export default SplashScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    footer:{
        flex:1,
        
    },
    logo:{
        width: 300,
        height: 300

    }
})