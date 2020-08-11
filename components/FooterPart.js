import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import LandingPage from '../screen/LandingPage';
import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import WelcomePage from '../screen/WelcomePage';
import { log } from 'react-native-reanimated';
const FooterPart = props => {
  const homeSelectHandler = () => {

    props.name.navigate('LandingHome');

  };
  const loginSelectHandler = () => {

  props.navigate('LoginScreenPage');

  };
  const registerSelectHandler = () => {
    const a = 'LandingHome'
    a.name.navigate('RegisterScreenPage');

  };
  return (

    <View style={styles.footer}>
   
      <View style={styles.home}>
        <TouchableOpacity onPress={ () => props.name.navigate('LandingHome') }>
          <Text style= {styles.textStyle}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>
        <TouchableOpacity onPress={ () => props.name.navigate('LoginScreenPage') }>
          <Text style= {styles.textStyle}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
        <TouchableOpacity onPress={ () => props.name.navigate('RegisterScreenPage') }>
          <Text style= {styles.textStyle}>Register</Text>
        </TouchableOpacity>
      </View>
    
   </View>
  );
};

const styles = StyleSheet.create({
    home: {
        flex:1,
        marginTop: 5,
        borderRightWidth: 2,
        borderColor: "#8e8a8a",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: "70%"
       // borderRightWidth: 1
    },
    login: {
        flex:1,
        marginTop: 5,
        borderRightWidth: 2,
        borderColor: "#8e8a8a",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: "70%"
        //borderRightWidth: 1
    },
    register: {
        flex:1,
        marginTop: 5,
        borderColor: "red",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: "70%"
        //borderRightWidth: 1
    },
    textStyle: {
      color: '#207dd3'
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#f9f6f6',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height:45,
        
      }
});

export default FooterPart;
