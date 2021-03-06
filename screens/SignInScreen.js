import React from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Value } from 'react-native-reanimated';

const SigninScreen =({navigation})=> {
    const [data,setData] =React.useState({
        username:'', 
        password:'', 
        check_textInputChange:false,
        secureTextEntry:true

    });
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style= {styles.conatainer}>
            <View style={styles.header}>
                <Text style ={styles.htext}>
                    WELCOME
                </Text>

            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style ={styles.ftext}>
                    Username
                </Text>
                <View style ={styles.action}>
                    <FontAwesome 
                    name="user-o"
                    color="black"
                    size={20}
                    />
                    <TextInput
                    placeholder = "Your User Name"
                    placeholderTextColor = "#666666"
                    style ={styles.TextInput}
                    autoCapitalize ="none"
                    onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                    <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                    />
                    </Animatable.View>
                    : null}
                </View>
                <Text style ={styles.ftext}>
                    Password
                </Text>
                <View style ={styles.action}>
                    <Feather 
                    name="lock"
                    color="black"
                    size={20}
                    />
                    <TextInput
                    placeholder = "Your Password"
                    placeholderTextColor = "#666666"
                    style ={styles.TextInput}
                    autoCapitalize ="none"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
               

                <View style ={styles.button}>
                    <TouchableOpacity>
                    <LinearGradient
                    colors={['#fff', '#F99B4E']}
                    style={styles.signIn}
                    >
                        <Text style ={styles.textSign }>
                            Sign In
                        </Text>    
                    </LinearGradient>

                    </TouchableOpacity>
                    <TouchableOpacity>
                    <LinearGradient
                    colors={['#fff', '#F99B4E']}
                    style={styles.signIn}
                    >
                        <Text style ={styles.textSign }>
                            Sign Up
                        </Text>    
                    </LinearGradient>

                    </TouchableOpacity>

                </View>


            </Animatable.View>

        </View>


    )}
    export default SigninScreen;


const styles = StyleSheet.create({
conatainer:{
    flex:1,
    backgroundColor:'#F99B4E'

},
header:{
    flex:1,
    paddingHorizontal:30,
    paddingBottom:30,
    justifyContent:'flex-end'
    
    

},
footer:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:20,
    
},
htext:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold'
},
action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#f2f2f2",
    paddingBottom:5

},
TextInput:{
    flex:1,
    paddingLeft:'20',
    color:'#05375a',
    
},
button:{
    alignItems:'center',
    marginTop:50,

},
signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontWeight: 'bold'
},
errorMsg: {
    color: '#FF0000',
    fontSize: 14,
},
})