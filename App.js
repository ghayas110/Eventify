import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homescreen'
const Stack = createStackNavigator();
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View,Button } from 'react-native';
import MyTabs from './screens/Maintabscreen';
import React from 'react';
import DrawerContent from './screens/DrawerContent';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={MyTabs} />
    
    </Drawer.Navigator>
  </NavigationContainer>
  


  )
}

