import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity,ScrollView } from 'react-native';
import DetailScreen from "./DetailScreen";
import Swiper from 'react-native-swiper/src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from "../component/StarRating";
import CardListScreen from './CardListScreen';
export default function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
<View  style={styles.container}>
  <View style={styles.sliderContainer}>
  <Swiper autoplay height={200}>
    <View style={styles.slide}>
<Image source={require('../assets/event(1).jpg' ) }resizeMode='cover'style={styles.sliderImage}/>
    </View>
    <View style={styles.slide}>
<Image source={require('../assets/event(2).jpg' ) }resizeMode='cover' style={styles.sliderImage}/>
    </View>
  </Swiper>
  </View>
<View style={styles.categoryContainer}>
  <TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate(CardListScreen)}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/cake.png' ) }    size={35} style={styles.categoryIcon}/>
</View>
<Text style={styles.categoryBtnTxt}>Birthday Party</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate(CardListScreen)}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/mar.png' ) }    size={35} style={styles.categoryIcon}/>
</View>
<Text style={styles.categoryBtnTxt}>Marrige Halls</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate(CardListScreen)}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/party.png' ) }    size={35} style={styles.categoryIcon}/>

</View>
<Text style={styles.categoryBtnTxt}>Celebration Party</Text>
</TouchableOpacity>
</View>
<View style={styles.categoryContainer}>
  <TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/hotel.png' ) }    size={35} style={styles.categoryIcon}/>
            
</View>
<Text style={styles.categoryBtnTxt}>Book Hotel</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.categoryBtn} onPress={()=>navigation.navigate(CardListScreen)}>
<View style={styles.categoryIcon}>

<Image source={require('../assets/event.png' ) }    size={25} style={styles.categoryIcon}/>
</View>
<Text style={styles.categoryBtnTxt}>Book Event</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.categoryBtn} onPress={()=>{}}>
<View style={styles.categoryIcon}>
<Image source={require('../assets/expand_more.png' ) }    size={25} style={styles.categoryIcon}/>
</View>
<Text style={styles.categoryBtnTxt}>Expand More</Text>
</TouchableOpacity>
</View>

<View style={styles.cardsWrapper}>
              <Text style={{alignSelf:"center",fontSize:18,fontWeight:"bold", marginTop:20}} >Featured Event Planners</Text>
              <TouchableOpacity onPress= {()=>{}}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/event(1).jpg' ) }resizeMode="cover" style={styles.cardImg}/>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
MIP Event Planners
                  </Text>
                  
                  <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
                </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress= {()=>{}}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/event(2).jpg' ) }resizeMode="cover" style={styles.cardImg}/>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
Shah Event Planners
                  </Text>
                  
                  <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
                </View>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress= {()=>{}}>
              <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                <Image source={require('../assets/event(3).jpg' ) }resizeMode="cover" style={styles.cardImg}/>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>
Fatima Event Planners
                  </Text>
                  
                  <Text style={styles.cardDetails}>
              Amazing description for this amazing place
            </Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
            
            
</View>
</ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ADD8E6' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: 'black',
    fontWeight:"bold"
    
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});