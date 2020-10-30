import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from "./Homescreen";
import DetailScreen from "./DetailScreen";
import ProfileScreen from './Profilescreen';
import ExploreScreen from './ExploreScreen';
import { View,TouchableOpacity } from 'react-native';
import {Avatar} from 'react-native-paper';


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const ProfileStack = createStackNavigator();
export default function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        style={{ backgroundColor: 'white' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor:"black",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Detail"
          component={DetailStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarColor:"#009387",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:"red",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:"coral",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="web" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
const DetailStackScreen =({navigation})=> {
    return(
    <DetailStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"#009387",
       
       
          
        }
      }}>
      <DetailStack.Screen name="Detail" component={DetailScreen} options={{headerTitleAlign: 'center',headerTintColor:"white" } } />
    </DetailStack.Navigator>)
    }
    const HomeStackScreen =({navigation})=> {
      return(
      <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"white"  
        }
      }}>
        <HomeStack.Screen name="Home"  component={HomeScreen} options={{title:"Eventify",headerTitleAlign: 'center',headerTintColor:"black",headerLeft:()=>
        <View style={{marginLeft:10}}>
          <MaterialCommunityIcons name="menu" color='black'  size={26} onPress={()=>navigation.openDrawer()}/>
          </View>,          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Ionicons 
                name="ios-search"
                size={25}
                color='black'
                onPress={() => {}}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 2}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.0-9/50692581_2002307873183710_7186366634313908224_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_eui2=AeGsp73SPPrioeMpRDJET8SYFA3ImDIwBugUDciYMjAG6MCK9f_XCz091fXBqfb93V6ehvn1M_CtCNLl95CaOLH5&_nc_ohc=PQ7x1zvrXzkAX9wEDr7&_nc_ht=scontent.fkhi16-1.fna&oh=4b89e991fae05063bd429aa07373a3f1&oe=5F8F880A',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
          
         }}/>
        
      </HomeStack.Navigator>
      )
    }
    const ProfileStackScreen =({navigation})=> {
      return(
      <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"red",   
        }
      }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerTitleAlign: 'center',headerTintColor:"white" }}/>
      </ProfileStack.Navigator>
      )
    }